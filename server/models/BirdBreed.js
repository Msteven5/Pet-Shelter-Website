const mongoose = require('mongoose');

const { Schema } = mongoose;

const birdBreedSchema = new Schema({
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
        default: true
    }
});

const BirdBreed = mongoose.model('BirdBreed', birdBreedSchema)

module.exports = BirdBreed;