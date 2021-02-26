const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const FavouritesSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "users" },
    track: { type: Schema.Types.ObjectId, ref: "tracks", unique: true }
})

const Favourites = mongoose.model("favourites", FavouritesSchema);

module.exports = Favourites;