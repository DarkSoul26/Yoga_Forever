const express = require("express");
const router = express.Router();
const paymentCollection = require("../Models/payment");
const { isValidPhone } = require("phone-validation");

//post route to store payment information of users in database
router.post("/payment", (req, res) => {
  const { mode, card, upiId, phone } = req.body;

  //Check if the foreign key exist i.e. phone
  if (!phone || phone == "") {
    res.status(400).json({ message: "Phone Number missing", message_id: "0" });
    return;
  }
  //If no payment is selected
  else if (mode == "") {
    res
      .status(400)
      .json({ message: "Please select a mode of payment", message_id: "0" });
    return;
  }
  //Foreign key is present
  else {
    //Find whether a payment method with this phone number present or not
    paymentCollection
      .findOne({ phone: phone })
      .then((savedPayment) => {
        //If payment information of this phone number is present then update payment information
        if (savedPayment) {
          if (mode == "card") {
            const { holderName, expirationDate, cardNo, cvvCode } = card;
            //If all card details are not present correctly
            if (
              !holderName ||
              !expirationDate ||
              !cardNo ||
              !cvvCode ||
              holderName == "" ||
              expirationDate == "" ||
              cardNo == "" ||
              cvvCode == ""
            ) {
              res
                .status(400)
                .json({
                  message: "Insufficient Information in card details",
                  message_id: "0",
                });
              return;
            }

            //Check if account number is 16 digits or not
            else if (cardNo.length != 16) {
              res
                .status(400)
                .json({ message: "Invalid card number", message_id: "0" });
              return;
            }
            //Check if CVV number is 3 digit or not
            else if (cvvCode.length != 3) {
              res
                .status(400)
                .json({ message: "Invalid CVV number", message_id: "0" });
              return;
            } else {
              //Update the information of card
              paymentCollection
                .updateOne(
                  { phone: phone },
                  { $set: { holderName, expirationDate, cardNo, cvvCode } }
                )
                .then((data) => {
                  res
                    .status(200)
                    .json({
                      message: "Payment method updated successfully",
                      data: data,
                      message_id: "1",
                    });
                  return;
                })
                .catch((err) => {
                  console.log(`Error in updation is : ${err}`);
                  return;
                });
            }
          }
          //If mode of payment selected is upi
          else if (mode == "upi") {
            //Check if the upi id is present or not
            if (!upiId || upiId == "") {
              res
                .status(400)
                .json({ message: "Missing UPI Id", message_id: "0" });
              return;
            } else {
              //Update the information of upi
              paymentCollection
                .updateOne({ phone: phone }, { $set: { upiId } })
                .then((data) => {
                  res
                    .status(200)
                    .json({
                      message: "Payment method updated successfully",
                      data: data,
                      message_id: "1",
                    });
                  return;
                })
                .catch((err) => {
                  console.log(`Error in updation is : ${err}`);
                  return;
                });
            }
          }
        }
        //Otherwise insert the payment information
        else {
          if (mode == "card") {
            const { holderName, expirationDate, cardNo, cvvCode } = card;
            //If all card details are not present correctly
            if (
              !holderName ||
              !expirationDate ||
              !cardNo ||
              !cvvCode ||
              holderName == "" ||
              expirationDate == "" ||
              cardNo == "" ||
              cvvCode == ""
            ) {
              res
                .status(400)
                .json({
                  message: "Insufficient Information in card details",
                  message_id: "0",
                });
              return;
            }
            //Check if card number is 16 digits or not
            else if (cardNo.length != 16) {
              res
                .status(400)
                .json({ message: "Invalid card number", message_id: "0" });
              return;
            }
            //Check if CVV number is 3 digit or not
            else if (cvvCode.length != 3) {
              res
                .status(400)
                .json({ message: "Invalid CVV number", message_id: "0" });
              return;
            }
            //Else all details are correct
            else {
              //Create new payment document
              const paymentDoc = new paymentCollection({
                card: {
                  holderName: holderName,
                  expirationDate: expirationDate,
                  cardNo: cardNo,
                  cvvCode: cvvCode,
                },
                upiId: "",
                phone: phone,
              });

              //Save the details of card
              paymentDoc
                .save()
                .then((data) => {
                  //If user stored successfully
                  res
                    .status(401)
                    .json({
                      message: "Payment method inserted successfully",
                      data: data,
                      message_id: "3",
                    });
                  return;
                })
                .catch((err) => {
                  //If error occurs in inserting payment info
                  console.log(`Error in inserting payment is : ${err}`);
                });
            }
          }
          //If mode of payment selected is upi
          else if (mode == "upi") {
            //Check if the upi id is present or not
            if (!upiId || upiId == "") {
              res
                .status(400)
                .json({ message: "Missing UPI Id", message_id: "0" });
              return;
            } else {
              //Make new document for upi
              const paymentDoc = new paymentCollection({
                card: {},
                upiId: upiId,
                phone: phone,
              });

              //Save the details of upi
              paymentDoc
                .save()
                .then((data) => {
                  //If user stored successfully
                  res
                    .status(401)
                    .json({
                      message: "Payment method inserted successfully",
                      data: data,
                      message_id: "3",
                    });
                  return;
                })
                .catch((err) => {
                  //If error occurs in inserting payment info
                  console.log(`Error in inserting payment is : ${err}`);
                });
            }
          }
        }
      })
      .catch((err) => {
        console.log(`Error in finding phone number is : ${err}`);
      });
  }
});

module.exports = router;
