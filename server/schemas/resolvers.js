const { signToken, AuthenticationError } = require('../utils/auth');
const bcrypt = require('bcrypt');
const { Animal, Breed, Product, User } = require('../models')

const resolvers = {
    Query: {
        getAnimals: async () => {
            try {
                return await Animal.find()
                    .populate('breed')
            } catch (error) {
                console.error('Error fetching animals:', error);
                throw new Error('Failed to fetch animals.');
            }
        },
        getAnimalsByType: async (_, { animalType }) => {
            try {
                const animals = await Animal.find({ animalType }).populate('breed')
                return animals;
            } catch (error) {
                console.error('Error fetching animals:', error);
                throw new Error('Failed to fetch animals.');
            }
        },
        getSingleAnimal: async (_, { _id }) => {
            try {
                const animal = await Animal.findBy_Id(_id);
                if (!animal) {
                    throw new Error('Animal not found.');
                }
                return animal;
            } catch (error) {
                throw new Error('Failed to fetch animal.');
            }
        },
        getProducts: async () => {
            try {
                return await Product.find();
            } catch (error) {
                throw new Error('Failed to fetch products.');
            }
        },
        getProductsByType: async (_, { productType }) => {
            try {
                const products = await Product.find({ productType })
                return products;
            } catch (error) {
                console.error('Error fetching products:', error);
                throw new Error('Failed to fetch products.');
            }
        },
        getSingleProduct: async (_, { _id }) => {
            try {
                const product = await Product.findBy_Id(_id);
                if (!product) {
                    throw new Error('Product not found.');
                }
                return product;
            } catch (error) {
                throw new Error('Failed to fetch product.');
            }
        },
        getBreeds: async () => {
            try {
                return await Breed.find();
            } catch (error) {
                throw new Error('Failed to fetch breed.');
            }
        },
        getBreedByType: async (_, { animalType }) => {
            try {
                const breed = await Breed.find({ animalType })
                return breed;
            } catch (error) {
                console.error('Error fetching breed:', error);
                throw new Error('Failed to fetch breed.');
            }
        },
        getSingleBreed: async (_, { _id }) => {
            try {
                const breed = await Breed.findBy_Id(_id);
                if (!breed) {
                    throw new Error('Breed not found.');
                }
                return breed;
            } catch (error) {
                throw new Error('Failed to fetch breed.');
            }
        },
        getUsers: async () => {
            try {
                return await User.find();
            } catch (error) {
                throw new Error('Failed to fetch breed.');
            }
        },
        getSingleUser: async (_, { _id }) => {
            try {
                const user = await User.findBy_Id(_id);
                if (!user) {
                    throw new Error('User not found');
                }
                return user;
            } catch (error) {
                throw new Error('Failed to fetch user.');
            }
        }
    },
    Mutation: {
        createUser: async (_, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },
        loginUser: async (_, { email, password }) => {
            try {
              const user = await User.findOne({ email });
              if (!user) {
                throw new Error('User not found');
              }
      
              if (password === user.password) {
                const token = signToken(user);
                return { token, user };
              }
      
              const passwordMatch = await bcrypt.compare(password, user.password);
              if (!passwordMatch) {
                throw new Error('Incorrect password');
              }
      
              const token = signToken(user);
              return { token, user };
            } catch (error) {
              throw new AuthenticationError('Login failed');
            }
          },
        updateUser: async (_, { _id, user }) => {
            updateFields = {}
            try {
                const { firstName, lastName, email, password  } = user

                if (firstName !== undefined) updateFields.firstName = firstName;
                if (lastName !== undefined) updateFields.lastName = lastName;
                if (email !== undefined) updateFields.email = email;
                if (password !== undefined) updateFields.password = password;

                const updatedUser = await User.findByIdAndUpdate(_id,
                    { $set: { $set: updateFields } }, { new: true });
                return updatedUser
            } catch (error) {
                throw new Error(`Failure to update user information: ${error.message}`);
            }
        },
        addAnimal: async (_, { animal }) => {

            const { name, animalType, breedId, image, weight, sex, age, description, color, personality, spayedNeutered, available, saved } = animal

            try {

                const breed = await Breed.findById(breedId)

                if (!breed) {
                    throw new Error('Breed not found.')
                }

                const newAnimal = await Animal.create({
                    name,
                    animalType,
                    breed,
                    image,
                    weight,
                    sex,
                    age,
                    description,
                    color,
                    personality,
                    spayedNeutered,
                    available,
                    saved
                });

                return newAnimal;
            } catch (error) {
                throw new Error(`Failure to add animal: ${error.message}`);
            }
        },
        updateAnimal: async (_, { _id, animal }) => {

            const { name, animalType, breedId, image, weight, sex, age, description, color, personality, spayedNeutered, available, saved } = animal

            const updateFields = {}

            try {

                if (breedId !== undefined) {
                    const breed = await Breed.findById(breedId)
                    updateFields.breed = breed;
                }
                if (name !== undefined) updateFields.name = name;
                if (animalType !== undefined) updateFields.animalType = animalType;
                if (image !== undefined) updateFields.image = image;
                if (weight !== undefined) updateFields.weight = weight;
                if (sex !== undefined) updateFields.sex = sex;
                if (age !== undefined) updateFields.age = age;
                if (description !== undefined) updateFields.description = description;
                if (color !== undefined) updateFields.color = color;
                if (personality !== undefined) updateFields.personality = personality;
                if (spayedNeutered !== undefined) updateFields.spayedNeutered = spayedNeutered;
                if (available !== undefined) updateFields.available = available;
                if (saved !== undefined) updateFields.saved = saved;

                const updatedPet = await Animal.findByIdAndUpdate(_id,
                    { $set: updateFields }, { new: true });
                return updatedPet
            } catch (error) {
                throw new Error(`Failure to update animal information: ${error.message}`);
            }
        },
        deleteAnimal: async (_, { _id }) => {
            try {
                const adopted = await Animal.findByIdAndDelete(_id)
                return adopted;
            }
            catch (error) {
                throw new Error(`Failed to delete animal:${error.message}`)
            }
        },
        addBreed: async (_, { breed }) => {

            const { animalType, breedName, toyPreference, activityLevel, hypoallergenic } = breed

            try {

                const newBreed = await Breed.create({
                    animalType,
                    breedName,
                    toyPreference,
                    activityLevel,
                    hypoallergenic
                });

                return newBreed;
            } catch (error) {
                throw new Error(`Failure to add breed: ${error.message}`);
            }
        },
        updateBreed: async (_, { _id, breed }) => {

            const { animalType, breedName, toyPreference, activityLevel, hypoallergenic } = breed

            const updateFields = {}

            try {

                if (animalType !== undefined) updateFields.animalType = animalType;
                if (breedName !== undefined) updateFields.breedName = breedName;
                if (toyPreference !== undefined) updateFields.toyPreference = toyPreference;
                if (activityLevel !== undefined) updateFields.activityLevel = activityLevel;
                if (hypoallergenic !== undefined) updateFields.hypoallergenic = hypoallergenic;

                const updatedBreed = await Breed.findByIdAndUpdate(_id,
                    { $set: updateFields }, { new: true });
                return updatedBreed
            } catch (error) {
                throw new Error(`Failure to update breed: ${error.message}`);
            }
        },
        addProduct: async (_, { product }) => {

            const { name, productType, description, price, quantity, inCart } = product

            try {

                const newProduct = await Product.create({
                    name,
                    productType,
                    description,
                    price,
                    quantity,
                    inCart
                });

                return newProduct;
            } catch (error) {
                throw new Error(`Failure to add product: ${error.message}`);
            }
        },
        updateProduct: async (_, { _id, product }) => {

            const { name, productType, description, price, quantity, inCart } = product

            const updateFields = {}

            try {

                if (name !== undefined) updateFields.name = name;
                if (productType !== undefined) updateFields.productType = productType;
                if (description !== undefined) updateFields.description = description;
                if (price !== undefined) updateFields.price = price;
                if (quantity !== undefined) updateFields.quantity = quantity;
                if (inCart !== undefined) updateFields.inCart = inCart;

                const updatedProduct = await Product.findByIdAndUpdate(_id,
                    { $set: updateFields }, { new: true });
                return updatedProduct
            } catch (error) {
                console.log(error)
                throw new Error('Failure to update product information.');
            }
        },
        deleteProduct: async (_, { _id }) => {
            try {
                const removedProduct = await Product.findByIdAndDelete(_id)
                return removedProduct;
            }
            catch (error) {
                throw new Error(`failed to delete product:${error.message}`)
            }
        },
    }
}
module.exports = resolvers;