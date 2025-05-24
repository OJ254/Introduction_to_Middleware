// Import necessary modules
import bodyParser from "body-parser"; // Middleware to parse request body
import express from "express"; // Express framework for handling HTTP requests
import { dirname } from "path"; // Helper to get directory name
import { fileURLToPath } from "url"; // Helper to convert URL to file path

// Get the directory name of the current module
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express(); // Create an Express application
const port = 3000; // Define the port number

// Middleware to parse URL-encoded request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Listening on port ${port}`); // Log a message when the server starts
});

// Route to serve the homepage
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html"); // Send the HTML file to the client
});

// Route to handle form submission
app.post("/submit", (req, res) => {
  // Log the user's input from the form fields
  console.log(`${req.body.street}${req.body.pet}`);

  // Send a response displaying the generated "band name"
  res.send(`<h1>Your band name is:</h1><h2>${req.body.street}${req.body.pet}✌️</h2>`);
});