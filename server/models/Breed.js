const mongoose = require('mongoose');

const { Schema } = mongoose;

const breedSchema = new Schema({
    animalType: {
        type: String,
        required: true
    },
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

const Breed = mongoose.model('Breed', breedSchema)

module.exports = Breed;