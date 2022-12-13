//import important libraries
import React, { useState, useEffect } from "react";
import "./AdmissionForm.css";

function AdmissionForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [startDate, setStartDate] = useState("");
  const [batchNumber, setBatchNumber] = useState();
  // eslint-disable-next-line no-restricted-globals
  const hostname = location.hostname;
  useEffect(() => {
    localStorage.clear();
  }, []);

  const SaveData = () => {
    //Changing startdate format to mm/dd/year
    var newStartDate = "";
    newStartDate +=
      startDate[5] +
      startDate[6] +
      "/" +
      startDate[8] +
      startDate[9] +
      "/" +
      startDate.substr(0, 4);

    //Store the data on the database by calling the REST API
    fetch("http://"+hostname+":8000/user", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        age: Number(age),
        phone: Number(phone),
        startDate: newStartDate,
        feesPaid: 500,
        batchNumber: batchNumber,
      }),
    })
      .then((response) => response.json())
      //Response from the REST API
      .then((responseData) => {
        const message_id = responseData.message_id;

        //If successful updation is there or successfull insertion is there
        if (message_id === "1" || message_id === "3") {
          //Store the information locally to be used later
          localStorage.setItem("name", name);
          localStorage.setItem("age", age);
          localStorage.setItem("phone", phone);
          localStorage.setItem("startDate", newStartDate);
          localStorage.setItem("batchNumber", batchNumber);
          //Move to the payment dialogue box
          document.querySelector(".formContainer").style.display = "none";
          document.querySelector(".paymentContainer").style.display = "flex";
        }
        //Else anything else happens then create a mockup box
        else {
          const message = responseData.message;
          window.alert(message);
          //If plan is active then simply reload the application
          if (message_id === "2") {
            window.location.reload();
          }
        }
      })
      .catch((err) => {
        console.log(`Error in accessing the server is ${err}`);
      });
  };

  return (
    <div className="formContainer">
      <input
        type="text"
        placeholder="Enter your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        autocomplete="off"
      />
      <input
        type="number"
        placeholder="Enter your Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        min="18"
        max="65"
      />
      <input
        type="number"
        placeholder="Enter your Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        maxLength="10"
        minLength="10"
      />
      <input
        type="date"
        placeholder="Starting date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <div className="batchTiming">
        <h>Available Batch Timings</h>
        <div className="batchOptions">
          <div>
            <input
              type="radio"
              id="first"
              name="batchNo"
              value="1"
              onChange={(e) => setBatchNumber(e.target.value)}
            />
            <label for="first">6 AM - 7 AM</label>
            <br />
          </div>
          <div>
            <input
              type="radio"
              id="second"
              name="batchNo"
              value="2"
              onChange={(e) => setBatchNumber(e.target.value)}
            />
            <label for="second">7 AM - 8 AM</label>
            <br />
          </div>
          <div>
            <input
              type="radio"
              id="third"
              name="batchNo"
              value="3"
              onChange={(e) => setBatchNumber(e.target.value)}
            />
            <label for="third">8 AM - 9 AM</label>
          </div>
          <div>
            <input
              type="radio"
              id="fourth"
              name="batchNo"
              value="4"
              onChange={(e) => setBatchNumber(e.target.value)}
            />
            <label for="fourth">5 PM - 6 PM</label>
          </div>
        </div>
      </div>
      <button className="toPayment" onClick={SaveData}>
        NEXT
      </button>
    </div>
  );
}

export default AdmissionForm;
