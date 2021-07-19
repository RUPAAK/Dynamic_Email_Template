const mongoose= require('mongoose')

const userSchema= mongoose.Schema({
    order: [{
        name: {type: String},
        qty: {type: Number},
        price: {type: Number},
    }],
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
}, {timestamps: true})

const Order= mongoose.model('Order', userSchema)

module.exports= Order