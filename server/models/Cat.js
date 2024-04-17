const mongoose = require('mongoose');

const { Schema } = mongoose;

const catSchema = new Schema({
    name: {
        type: String,
        required: true,
        default: "Unknown"
    },
    breed: {
        type: Schema.Types.ObjectId,
        ref: 'CatBreed',
        required: true
    },
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

const Cat = mongoose.model('Cat', catSchema)

module.exports = Cat;