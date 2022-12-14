const mongoose = require('mongoose')
//optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const movieSchema = new Schema({
    title: String,
    releaseYear: Number,
    mpaaRating: String,
    cast: [String],
    nowShowing: Boolean,
})

// compile the schema into a model and export
module.exports = mongoose.model('Movie', movieSchema)
