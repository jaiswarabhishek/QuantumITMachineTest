// # Main Server File

// # Express and other libraries
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./utils/dbConnection');

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "./config/.env" });
}

// # consting Middleware for error and not found handling
const { onNoMatch, onError } = require('./middleware/errorHandler.js');

// # consting routes
const userRoutes = require('./routes/userRoutes');


// # Initializing express app
const app = express();
// # Declaring PORT
const PORT = process.env.PORT || 5000;


// # Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// # Database connection
connectDB();



// # Routes
app.use('/api/v1', userRoutes);



// # Error and Not Found
app.use(onNoMatch);
app.use(onError);


// # Function to start the server
const start = async () => {

	try {

		app.listen(PORT, console.log(`Server listening on port ${PORT}...`));

		// await downloadrequireArray();
		
	} catch (error) {

		console.log(error);
		// logger.error({ 'error': error });

	}

};

// # Starting the server
start();



