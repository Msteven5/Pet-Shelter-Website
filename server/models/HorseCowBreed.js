const mongoose = require('mongoose');

const { Schema } = mongoose;

const horseCowBreedSchema = new Schema({
    breedName: {
        type: String,
        required: true,
    },
    diet: {
        type: String,
        required: true,
    },
    hygiene: {
        type: String,
        required: true,
    }
});

const HorseCowBreed = mongoose.model('HorseCowBreed', horseCowBreedSchema)

module.exports = HorseCowBreed;