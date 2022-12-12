const mongoose = require("mongoose");

//Create a new Schema for users
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  phone: {
    type: Number,
    require: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  batchNumber: {
    type: Number,
    required: true,
  },
  feesPaid: {
    type: Number,
    required: true,
  },
});

//Create new collection of users using the new schema
const collection = new mongoose.model("YogaUsers", userSchema);

module.exports = collection;
