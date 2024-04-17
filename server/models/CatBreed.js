const mongoose = require('mongoose');

const { Schema } = mongoose;

const catBreedSchema = new Schema({
    breedName: {
        type: String,
        required: true,
    },
    toyPreference: {
        type: String,
        required: true,
    },
    activityLevel: {
        type: String,
        required: true,
    },
    hypoallergenic: {
        type: Boolean,
        required: true,
        default: false
    }
});

const CatBreed = mongoose.model('CatBreed', catBreedSchema)

module.exports = CatBreed;