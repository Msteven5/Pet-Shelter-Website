const mongoose = require('mongoose');

const { Schema } = mongoose;

const birdSchema = new Schema({
    name: {
        type: String,
        required: true,
        default: "Unknown"
    },
    breed: {
        type: Schema.Types.ObjectId,
        ref: 'BirdBreed',
        required: true
    },
    image: {
        type: String,
        required: true,
        default: TBD
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
    featherColor: {
        type: String,
        required: true,
        default: "Unknown"
    },
    personality: [{
        type: String,
        required: true,
        default: "Unknown"
    }],
    available: {
        type: String,
        required: true,
        default: "Available"
    }
});

const Bird = mongoose.model('Bird', birdSchema)

module.exports = Bird;