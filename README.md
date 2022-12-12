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


### Application Screenshots

### Technologies used in this Project are

-   **[React](https://reactjs.org/)** : React is a free and open-source front-end JavaScript library for building user interfaces based on UI components
-   **[Bootstrap](https://getbootstrap.com/)** : Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.
-   **[NodeJS](https://nodejs.org/en/about/)** : Node.js is an open-source server environment. Node.js is cross-platform and runs on Windows, Linux, Unix, and macOS.
-   **[MongoDB](https://www.mongodb.com/what-is-mongodb)** : MongoDB is a source-available cross-platform document-oriented database program.
