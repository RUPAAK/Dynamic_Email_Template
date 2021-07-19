const mongoose= require('mongoose')

const emailSchema= mongoose.Schema({
    template_name: {type: String},
    topic: {type: String},
    emailBody: {type: String},
    sentBy: {type: String, default: "bitpointnepal@gmail.com"},
}, {timestamps: true})

const Email= mongoose.model('Email', emailSchema)

module.exports= Email