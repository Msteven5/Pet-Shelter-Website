// const mongoose = require('mongoose');
// const db = require('./connection');
// const { Product, Animals } = require('../models');
// const Availability = require('../models/Availability');
// const cleanDB = require('./cleanDB');

// db.once('open', async () => {
//     try {
//         await cleanDB('Product', 'product');
//         await cleanDB('Animal', 'animal');
//         await cleanDB('Availability', 'availabilities');
//         process.exit();
//     } catch (error) {
//         console.error('Error seeding data:', error);
//         process.exit(1);
//     }
// })