const mongoose = require('mongoose');

const { Schema } = mongoose;

const dogSchema = new Schema({
    name: {
        type: String,
        required: true,
        default: "Unknown"
    },
    breed: [{
        type: Schema.Types.ObjectId,
        ref: 'DogBreed',
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
    furColor: {
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
    }
});

const Dog = mongoose.model('Dog', dogSchema)

module.exports = Dog;