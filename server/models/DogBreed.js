const mongoose = require('mongoose');

const { Schema } = mongoose;

const dogBreedSchema = new Schema({
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

const DogBreed = mongoose.model('DogBreed', dogBreedSchema)

module.exports = DogBreed;