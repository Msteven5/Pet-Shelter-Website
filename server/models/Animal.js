const mongoose = require('mongoose');

const { Schema } = mongoose;

const animalSchema = new Schema({
    name: {
        type: String,
        default: "Unknown"
    },
    animalType: {
        type: String,
        default: "Unknown"
    },
    breed: [{
        type: Schema.Types.ObjectId,
        ref: 'Breed',
        default: "Unknown"
    }],
    image: {
        type: String,
        default: "Unknown"
    },
    weight: {
        type: String,
        default: "Unknown"
    },
    sex: {
        type: String,
        default: "Unknown"
    },
    age: {
        type: String,
        default: "Unknown"
    },
    description: {
        type: String,
        default: "Unknown"
    },
    color: {
        type: String,
        default: "Unknown"
    },
    personality: [{
        type: String,
        default: "Unknown"
    }],
    spayedNeutered: {
        type: Boolean,
        default: true
    },
    available: {
        type: String,
        default: "Available"
    },
    saved: {
        type: Boolean,
        default: false
    }
});

const Animal = mongoose.model('Animal', animalSchema)

module.exports = Animal;