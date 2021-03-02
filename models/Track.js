const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const TrackSchema = new Schema({

    track_image: {
        type: String,
        data: Buffer
    },
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
    },
    track_intensity: {
        type: String,
        required: true
    },
    track_duration: {
        type: String,
        required: true
    },
    long: {
        type: String,
        required: true
    },
    lat: {
        type: String,
        required: true
    }
});

const Track = mongoose.model("tracks", TrackSchema);

module.exports = Track;