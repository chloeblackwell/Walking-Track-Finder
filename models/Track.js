const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const TrackSchema = new Schema({

    track_name: {
        type: String,
        required: true
    },
    track_location: {
        type: String,
        required: true
    },
    track_distance: {
        type: String,
        required: true
    }
});

const Track = mongoose.model("tracks", TrackSchema);

module.exports = Track;