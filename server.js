const app = require("./app/app");

//Create variable to require http module
const http = require('http');
//for dotenv, do not need to create variable
//This is letting us use the .env file; it will be parsed automatically
require('dotenv').config();

//! Before .env: port=3000
//syntax format: listen(port, callback function)
//~ http.createServer().listen(3000, () => {
    //~ console.log(`Server is running on 
    //~ port 3000`);

//^ to check this, go to terminal and type: node server.js 
//^ OR
//^ go to terminal and type: npm start 

//! After .env: port=3000
// createServer(app) brings in app.js to our server
//syntax format: listen(port, callback function)
http.createServer(app).listen(process.env.port, () => {
    console.log(`Server is running on port ${process.env.port}`);
});
