const express = require("express");
const router = express.Router();

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

module.exports = router;