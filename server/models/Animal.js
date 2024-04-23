const mongoose = require('mongoose');

const { Schema } = mongoose;

const animalSchema = new Schema({
    name: {
        type: String,
        required: true,
        default: "Unknown"
    },
    animalType: {
        type: String,
        required: true
    },
    breed: [{
        type: Schema.Types.ObjectId,
        ref: 'Breed',
        required: true
    }],
    image: {
        type: String,
        required: true,
        default: TBD
    },
    weight: {
        type: String,
        required: true,
        default: "Unknown"
    },
    sex: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true,
        default: "Unknown"
    },
    description: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true,
        default: "Unknown"
    },
    personality: [{
        type: String,
        required: true,
        default: "Unknown"
    }],
    spayedNeutered: {
        type: Boolean,
        required: true,
        default: true
    },
    available: {
        type: String,
        required: true,
        default: "Available"
    },
    saved: {
        type: Boolean,
        default: false
    }
});

const Animal = mongoose.model('Animal', animalSchema)

module.exports = Animal;