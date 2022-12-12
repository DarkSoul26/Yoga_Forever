//Import all dependencies,frameworks,models,routes
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = 8000 | process.env.PORT;
const hostname = "localhost";
const userRoute = require("./Routes/userRoute");
const paymentRoute = require("./Routes/paymentRoute");
require("dotenv").config();

//Setup database entities
const MONGO_DB = `mongodb+srv://${process.env.MONGO_ADMIN}:${process.env.MONGO_PASS}@cluster0.96jy1.mongodb.net/?retryWrites=true&w=majority`;

//Middleware
app.use(cors());
app.use(express.json());

//Setup database
mongoose
  .connect(MONGO_DB, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log("Database connection successfull.");
  })
  .catch((err) => {
    console.log(err);
  });

//Implement routing
app.use(userRoute);
app.use(paymentRoute);

//Start the server
app.listen(PORT, hostname, () => {
  console.log(`Server is running on https://${hostname}:${PORT}`);
});
