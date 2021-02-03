const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const FavouritesSchema = new Schema({
    _id: Schema.Types.ObjectId,
    user: [{ type: Schema.Types.ObjectId, ref: "User" }],
    track: [{ type: Schema.Types.ObjectId, ref: "Track" }]

})

const Favourites = mongoose.model("favourites", FavouritesSchema);

module.exports = Favourites;