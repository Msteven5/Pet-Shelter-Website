const { User, Animal, Breed, Product } = require('../models');

const cleanDB = async (modelName, collectionName) => {
  try {
    if (modelName === 'User') {
      await User.deleteMany({});
    } else if (modelName === 'Animal') {
      await Animal.deleteMany({});
    } else if (modelName === 'Breed') {
      await Breed.deleteMany({});
    } else if (modelName === 'Product') {
      await Product.deleteMany({});
    } else {
      console.error(`Unknown model: ${modelName}`);
    }
    console.log(`${collectionName} collection cleaned`);
  } catch (error) {
    console.error(`Error cleaning ${collectionName} collection:`, error);
  }
};

module.exports = cleanDB;