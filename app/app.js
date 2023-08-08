//~ import router from '../router/router';
const router = require('../router/router');
//if you want to call an express listener, you need to call the express function
const express = require('express');
const app = express();

// use middleware to parse json payloads into our request model
app.use(express.json());
//request.body.username request.body.password

//Service actuator - test to see if service is up
// "/" is the root of the service
app.get("/", (req, res) => {
    // First is string calling localhost:3000
    // Second is request and response
    res.status(200).json({ message: 'Service is up' });
});

// Use middleware to define router
// Name "/" whatever you want (ex: "/exercise")
// *IMPORTANT* NEVER use "/" or router twice!
//* Ex: app.use('/user', userRouter); - good
//* app.use('/', router); - bad b/c already used "/" above
app.use("/exercise", router);

// use middleware to handle errors and bad URL paths
app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});

// use middleware to handle errors 
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
//~ export default app;
//~ export { app };


