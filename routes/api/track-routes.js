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

router.post("/api/findTrack", (req, res) => {
    Track.findOne({
        _id: (req.body.trackData)
    }).populate('favourites').exec((err, doc) => {
        if (err) { res.status(400).json }
        res.json(doc)

    })

});

module.exports = router;