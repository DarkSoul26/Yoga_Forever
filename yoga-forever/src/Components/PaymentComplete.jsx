/* eslint-disable jsx-a11y/alt-text */
//import important libraries
import React from "react";
import "./PaymentComplete.css";
function PaymentComplete() {
  //After completion of payment just return to homepage
  const ReturnToHome = () => {
    window.location.reload();
  };
  return (
    <div className="completionContainer">
      <img src="./payment_complete.png" className="completed" />
      <h>PAYMENT COMPLETED</h>
      <div className="details">
        <h>Name: {String(localStorage.getItem("name"))} </h>
        <h>Age: {String(localStorage.getItem("age"))} years </h>
        <h>Phone: {String(localStorage.getItem("phone"))}</h>
        <h>Start Date: {String(localStorage.getItem("startDate"))} </h>
        <h>Batch: {String(localStorage.getItem("batchNumber"))} </h>
        <h>Fees Paid: ₹500 </h>
      </div>
      <button type="button" onClick={ReturnToHome}>
        HOME <i class="fas fa-home"></i>
      </button>
    </div>
  );
}

export default PaymentComplete;
