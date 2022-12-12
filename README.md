# Application Documenation

-   Build on three services - _Frontend_ , _Backend_ , _Database_.
-   Frontend is made using **React JS** using the functional components.
-   Database uses **MongoDB** which is a NoSQL database.
-   Backend is made using **NodeJS** to provide robust functionalities.
-   All the services are bind together using custom APIs.

## Important Assumptions

-   The registration is first step and the user can select the slot and pay fees just after this.
-   Phone number provided by the user must be unique in the database, therefore acting as a primary key.
-   The payment can be done via card or UPI but the payment functionality is not implemeted as mentioned in the assignment.
-   One time payment can be done only after the current date of registration or revisiting the website. 
-   User need to register and make payment again for booking a new slot.
-   User cannot book more than one time in a month as the timings are fixed for that month.
-   Mobile number is validated based on 10 digit length and country code.
-   Minor validations like entering all the details on the registration form are compulsary.
-   Moreover, age limit has be restricted between 18-65.

## Setup Instructions

-   Clone the project from github.
-   Contact me for the env file details: sanchitkalsi@gmail.com.
-   Go into the **yoga-forever** directory and run `npm install`.
-   Now to start the application frontend on the local server run `npm start`.
-   Similarly, go into the **yoga-forever-backend** directory and run `npm install`.
-   And, start the backend server using the command `node app`.
-   The application will be available on the **Port 3000** and the backend most probably will be running on **Port 8000**.

### Below are the ER diagram models of the Yoga User and the Yoga Payment
<p align="center">
  <img align="center" height="180em" src="https://user-images.githubusercontent.com/60578902/207037652-9935fb51-9b1f-42a3-93e5-613a8985f923.jpg" />
 </p>
 <p align="center">Yoga User</p>
 <br>
 <br>
 <p align="center">
  <img align="center" height="180em" src="https://user-images.githubusercontent.com/60578902/207037672-1fdf2de2-1ce3-47b2-a6a8-163e66d41a26.jpg" />
 </p>
 <p align="center">Yoga Payments</p>
 <br>
 <br>
 <p align="center">
  <img align="center" height="180em" src="https://user-images.githubusercontent.com/60578902/207037680-6795afb3-a8b2-496a-8662-c407726933f1.jpg" />
 </p>
 <p align="center">Yoga Forever</p>
 <br>
 <br>


### Application Screenshots
<p align="center">
  <img width="926" alt="image" src="https://user-images.githubusercontent.com/60578902/207039489-8493e778-3e54-4349-81c6-2ed7191ea12f.png">
 </p>
 <p align="center">Admission Form</p>
 <br>
 <br>
 <p align="center">
  <img width="926" alt="image" src="https://user-images.githubusercontent.com/60578902/207039726-33f43913-9424-4cc9-895c-af72b7c18b2b.png">
 </p>
 <p align="center">Payment</p>
 <br>
 <br>
 <p align="center">
  <img width="926" alt="image" src="https://user-images.githubusercontent.com/60578902/207039881-1abac12a-3da8-4f52-9d3d-93d616e4734f.png">
 </p>
 <p align="center">Payment Completed</p>
 <br>
 <br>
 
### Technologies used in this Project are

-   **[React](https://reactjs.org/)** : React is a free and open-source front-end JavaScript library for building user interfaces based on UI components
-   **[Bootstrap](https://getbootstrap.com/)** : Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.
-   **[NodeJS](https://nodejs.org/en/about/)** : Node.js is an open-source server environment. Node.js is cross-platform and runs on Windows, Linux, Unix, and macOS.
-   **[MongoDB](https://www.mongodb.com/what-is-mongodb)** : MongoDB is a source-available cross-platform document-oriented database program.
