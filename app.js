const sgMail = require('@sendgrid/mail');
const express = require('express')
const dotenv= require('dotenv')
const cors = require('cors')
const Email = require('./emailModel')
const User = require('./userModel')
const Order = require('./orderModel')
const mongoose = require('mongoose')
const encode = require('encode-html');
const decode = require('decode-html');


const app = express()
dotenv.config()

const SENDGRID_USERNAME = process.env.SENDGRID_USERNAME
const SENDGRID_PASSWORD = process.env.SENDGRID_PASSWORD
const SENDER= process.env.SENDER

const sendMessage=(email, template,template_name)=>{
  const msg = {
    to: email,
    from: SENDER, // Use the email address or domain you verified above
    subject: template_name,
    text: template_name,
    html: template,

  };
  //ES6
  sgMail
    .send(msg)
    .then(() => { }, error => {
      console.error(error);

      if (error.response) {
        console.error(error.response.body)
      }
    });
  //ES8
  (async () => {
    try {
      await sgMail.send(msg);
    } catch (error) {
      console.error(error);

      if (error.response) {
        console.error(error.response.body)
      }
    }
  })();
}

sgMail.setApiKey(SENDGRID_PASSWORD);

app.use(cors())
app.use(express.json())


//created demo user to get userinfo from db
app.post('/newuser', async (req, res) => {
  const { username, email } = req.body
  const newuser = await User({ username, email }).save()
  res.json(newuser)
})


//template creation. Takes template from ./template.js
app.post('/template', async (req, res) => {
  const { template_name, topic } = req.body
  const htmlTemplate = require('./template')()
  const emailBody = encode(htmlTemplate)
  const emailTemplate = await Email({ template_name, topic, emailBody }).save()
  res.json(emailTemplate)
})

//random emailsend. Not so important
app.post('/:id/sendmail', async (req, res) => {
  const template = await Email.findById(req.params.id)
  let emailTemplate = decode(template.emailBody)
  const user = await User.findOne({ email: req.body.user_email })

  emailTemplate = emailTemplate.replace(/##user_name##/g, user.username);
  emailTemplate = emailTemplate.replace(/##user_email##/g, req.body.user_email);


  const msg = {
    to: req.body.user_email,
    from: template.sentBy, // Use the email address or domain you verified above
    subject: template.template,
    text: template.template,
    html: emailTemplate,

  };
  //ES6
  sgMail
    .send(msg)
    .then(() => { }, error => {
      console.error(error);

      if (error.response) {
        console.error(error.response.body)
      }
    });
  //ES8
  (async () => {
    try {
      await sgMail.send(msg);
    } catch (error) {
      console.error(error);

      if (error.response) {
        console.error(error.response.body)
      }
    }
  })();

  res.status(200).json('Email Sent')
})


//demo order created for order purchansed demo
app.post('/:id/createorder', async (req, res) => {

  const { order } = req.body

  const newOrder = await Order({ order, user: req.params.id }).save()
  res.json(newOrder)
})

//order paid email
app.get('/:id/orderpaid', async (req, res) => {
  const order = await Order.findById(req.params.id).populate("user")
  const encodedTemplate= await Email.findOne({template_name: "OrderInvoice"})
  let decodedTemplate= decode(encodedTemplate.emailBody)

  decodedTemplate = decodedTemplate.replace(/##user_name##/g, order.user.username);
  decodedTemplate = decodedTemplate.replace(/##user_email##/g, order.user.email);
  decodedTemplate = decodedTemplate.replace(/##order_items##/g, order.order.map(item=>{
    return(
      require('./orderdiv')(item)
    )
  }));


  const msg = {
    to: order.user.email,
    from: SENDER, // Use the email address or domain you verified above
    subject: "Invoice",
    text: "Invoice",
    html: decodedTemplate,

  };
  //ES6
  sgMail
    .send(msg)
    .then(() => { }, error => {
      console.error(error);

      if (error.response) {
        console.error(error.response.body)
      }
    });
  //ES8
  (async () => {
    try {
      await sgMail.send(msg);
      res.status(200).json('Email Sent')
    } catch (error) {
      console.error(error);

      if (error.response) {
        console.error(error.response.body)
      }
    }
  })();


})


//forget password template
app.post('/forgetpassword', async(req, res)=>{
  const user= await User.findOne({email: req.body.user_email});
  const template= await Email.findOne({template_name: "Forget_Password"})
  const encodedTemplate= template.emailBody;
  let decodedTemplate= decode(encodedTemplate)
  decodedTemplate = decodedTemplate.replace(/##user_name##/g, user.username);
  decodedTemplate = decodedTemplate.replace(/##reset_url##/g, 'http://localhost:3000');

  sendMessage(user.email, decodedTemplate, template.template_name)
  res.end()
})

mongoose.connect('mongodb://localhost:27017/emailtemplate', {
  useCreateIndex: true, useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
  console.log('data connected')
}).catch((e) => console.error(e))

app.listen(5000, () => console.log('server up and running'))