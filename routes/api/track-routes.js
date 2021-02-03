const express = require("express");
const router = express.Router();

// Load Track Model 

const Track = require("../../models/Track");

router.get("/api/tracks", (req, res) => {
    Track.find()
        .then(response => {
            if (response) {
                res.json(response)
            }
            else {
                res.status(400).json
            }
        })
})

// Get one track 

router.get("/api/track/:id", (req, res) => {
    Track.findOne({
        attributes: ["_id"]
    }).then(response => {
        if (response) {
            res.json(response)
        }
        else {
            res.status(400).json
        }
    })
})

module.exports = router;