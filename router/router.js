const express = require("express");
const router = express.Router();

// Create array of objects to use for GET, POST, PATCH, DELETE
const users = [
    {
        id: 1,
        lastName: "Atrick",
        firstName: "Gary",
        age: 92
    },
    {
        id: 2,
        lastName: "Ball",
        firstName: "Crystal",
        age: 13
    },
    {
        id: 3,
        lastName: "Pott",
        firstName: "Jack",
        age: 32
    },
    {
        id: 4,
        lastName: "King",
        firstName: "Joe",
        age: 54
    }
]

//* Assignment: GET users Array 
router.get("/", (req, res, next) => {
    res.status(200).json(users);
});

//* Assignment: GET by id:
router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    const user = users.find(u => u.id === parseInt(id));
    if (user) {
        res.json(user);
    } else {
        res.send(id);
    }
});

//* Assignment: POST (add new user to array)
router.post('/', (req, res) => {
    console.log(req.body);
    const { id, lastName, firstName, age } = req.body;
    const newUser = { id, lastName, firstName, age }
    res.status(200).json({
        message: "Added new User", 
        //If key = value, just use one word
        // So, this: data: data, -is the same as:
        id,
        lastName,
        firstName,
        age
    })
    users.push(newUser);
    res.json(newUser);
});

//* Assignment: PATCH (update user in array)
// change the age of the user with the id of 2 from age: 13 to age: 16
router.patch('/:id', (req, res) => {
    const id = req.params.id;
    const user = users.find(u => u.id === parseInt(id));
    if (user) {
        user.age = 16;
        res.json(user);
    } else {
        res.status(404).json({ message: "User not found" });
    }
})

//* Assignment: DELETE
// delete newUser added to array earlier with POST
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const index = users.findIndex(u => u.id === parseInt(id));
    if(index > -1) {
        const deletedUser = users.splice(index, 1)[0];
        res.json(deletedUser);
    } else {
        res.status(404).json({ message: "User not found" });
    }
});

module.exports = router;


//! Notes from lessons:
/*
// Calling: http://localhost:3000/exercise
router.get("/", (req, res, next) => {
    res.status(200).json({
        message: "Successful - GET",
        metadata: {
            hostname: req.hostname,
            method: req.method,
        }, 
    });
});

// Example of adding parameter and GET by that parameter
// syntax: :name after "/" (after base route)
// http://localhost:3000/exercise/:city
router.get('/:city', (req, res) => {
    // create variable to get city from request
    // params is an object that has what we are specifying in the route
    const city = req.params.city;
    console.log('params >>>', city);
    res.status(200).json({
        message: "City from Exercise"
    })
})

// If calling: http://localhost:3000/exercise/34 - 34 is the id
router.get('/:id', (req, res, next) => {
    // Create variable: Get the id from the request
    const id = req.params.id;
    res.status(200).json({
        message: "Successful - GET by ID",
        id: id,
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
    });
});
*/



