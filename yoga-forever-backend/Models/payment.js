const mongoose = require('mongoose')

//Create a new Schema for payment information of users
const paymentSchema = new mongoose.Schema({
    "card": {
        type: Object,
        "holderName": {
            type: String
        },
        "expirationDate": {
            type: String
        },
        "cardNo": {
            type: String
        },
        "cvvCode": {
            type: String
        }
    },
    "upiId": {
        type: String
    },
    "phone": {
        type: Number,
        required: true
    }
})

//Create new collection of payment information using the new schema
const collection = new mongoose.model("YogaPayments", paymentSchema)

module.exports = collection