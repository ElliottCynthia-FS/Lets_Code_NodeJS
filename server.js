
//? (1) Attempt module error fix: no default export: 
//? (1) import * as app from './app/app';
//? (2) Attempt module error fix: cannot use import statement outside a module:
//? (2) const app = require('./app/app.js');
//? (3) Attempt module error fix: Module has no default export:
//? (3) import { app } from './app/app.js';
//? (4) import { app } from "./app/app";
//~ import app from './app/app';
const app = require("./app/app");

//Create variable to require http module
const http = require('http');
//for dotenv, do not need to create variable
require('dotenv').config();

//syntax format: listen(port, callback function)
//! Before .env: port=3000
//~ http.createServer().listen(3000, () => {
    //~ console.log(`Server is running on 
    //~ port 3000`);

//^ to check this, go to terminal and type: node server.js 
//^ OR
//^ go to terminal and type: npm start 

//! After .env: port=3000
http.createServer(app).listen(process.env.port, () => {
    console.log(`Server is running on port ${process.env.port}`);
});
