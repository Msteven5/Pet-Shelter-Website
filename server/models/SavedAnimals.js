const mongoose = require('mongoose');
const { Schema } = mongoose;

const savedAnimalsSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    dogId: {
        type: Schema.Types.ObjectId,
        ref: 'Dog',
        required: true
    },
    catId: {
        type: Schema.Types.ObjectId,
        ref: 'Cat',
        required: true
    },
    birdId: {
        type: Schema.Types.ObjectId,
        ref: 'Bird',
        required: true
    },
    horseOrCowId: {
        type: Schema.Types.ObjectId,
        ref: 'Horse-Cow',
        required: true
    }
});

const SavedAnimals = mongoose.model('SavedAnimals', savedAnimalsSchema);

module.exports = SavedAnimals;