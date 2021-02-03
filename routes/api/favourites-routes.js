const express = require("express");
const router = express.Router();


const Favourites = require("../../models/Favourites");


router.get("/api/favourites", (req, res) => {
    Favourites.find()
        .then(response => {
            if (response) {
                res.json(response)
            }
            else {
                res.status(400).json
            }
        })
})

router.post("/api/add", (req, res) => {
    Favourites.create()
        .then(response => {
            if (response) {
                res.json(response)
            }
            else {
                res.status(400).json
            }
        })
})

module.exports = router;