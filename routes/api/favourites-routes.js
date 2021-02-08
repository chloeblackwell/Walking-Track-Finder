const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');


const Favourites = require("../../models/Favourites");


router.get("/api/favourites", async (req, res) => {
    var decodedUser = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY);
    const data = await Favourites.find({
        user: decodedUser._id
    }).populate('track').exec();
    res.json(data);
})

router.post("/api/add", (req, res) => {
    var decodedUser = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY);
    Favourites.create({
        track: (req.body.trackData),
        user: decodedUser._id
    })
        .then(response => {
            if (response) {
                res.json(response)
            }
            else {
                res.status(400).json
            }
        })
})

router.delete("/api/deleteFavourite", (req, res) => {

    Favourites.remove({ _id: req.params._id }, function (err) {
        if (err) {
            res.send(err);
        }
        else {
            res.send({ data: "Record has been Deleted..!!" });
        }
    });

})

module.exports = router;