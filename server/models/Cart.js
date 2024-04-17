const mongoose = require('mongoose');
const { Schema } = mongoose;

const cartSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    bedId: {
        type: Schema.Types.ObjectId,
        ref: 'Bed',
        required: true
    },
    treatId: {
        type: Schema.Types.ObjectId,
        ref: 'Treat',
        required: true
    },
    foodId: {
        type: Schema.Types.ObjectId,
        ref: 'Food',
        required: true
    },
    toyId: {
        type: Schema.Types.ObjectId,
        ref: 'Toy',
        required: true
    }
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;