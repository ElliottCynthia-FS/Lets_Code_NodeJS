const router = require('../router/router');
const express = require('express');
const app = express();

// Use this before any other middleware or routes
app.use(express.json());
//request.body.username request.body.password

//Service actuator - test to see if service is up
// "/" is the root of the service (base-route or root-route)
app.get("/", (req, res) => {
    res.status(200).json({ message: 'Service is UP!' });
});

// Name "/" whatever you want (ex: "/exercise")
app.use("/users", router);

// use middleware to handle errors and bad URL paths
app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    // status doesn't always come back. If it doesn't, use 500
    res.status(error.status || 500).json({
        error: {
            message: error.message,
            status: error.status,
        }
    })
});

module.exports = app;
