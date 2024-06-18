const mongoose = require('mongoose');
const db = require('./connection');
const { Product, Animal, Breed } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
    try {
        await cleanDB('Product', 'products');
        await cleanDB('Animal', 'animals');
        await cleanDB('Breed', 'breeds');

        const breedData = [
            {
                animalType: 'Dog',
                breedName: 'Yorkie',
                toyPreference: 'Stuffed Toys',
                activityLevel: 'Mild activity, mostly a lap dog.',
                hypoallergenic: false
            },
            {
                animalType: 'Dog',
                breedName: 'Labrador Retriever',
                toyPreference: 'Chew Toys & Tennis Balls',
                activityLevel: 'Hyperactive, loves to run and play.',
                hypoallergenic: false
            },
            {
                animalType: 'Dog',
                breedName: 'Golden Retriever',
                toyPreference: 'Chew Toys & Tennis Balls',
                activityLevel: 'Hyperactive, loves to run and play.',
                hypoallergenic: false
            },
            {
                animalType: 'Dog',
                breedName: 'Pug',
                toyPreference: 'Stuffed Toys',
                activityLevel: 'Very low energy dogs, entirely lap dogs.',
                hypoallergenic: false
            },
            {
                animalType: 'Dog',
                breedName: 'Poodle',
                toyPreference: 'Stuffed Toys',
                activityLevel: 'Mild activity, mostly a lap dog.',
                hypoallergenic: true
            },
            {
                animalType: 'Cat',
                breedName: 'Toyger',
                toyPreference: 'Scratching Posts & Feather Toys',
                activityLevel: 'Very low activity, some play from time to time is fine.',
                hypoallergenic: false
            },
            {
                animalType: 'Cat',
                breedName: 'Siamese',
                toyPreference: 'Scratching Posts & Feather Toys',
                activityLevel: 'Very low activity, some play from time to time is fine.',
                hypoallergenic: true
            },
            {
                animalType: 'Cat',
                breedName: 'Sphynx',
                toyPreference: 'Stuffed Toys & Scratching Posts',
                activityLevel: 'Sometimes hyperactive, depending on how it was raised.',
                hypoallergenic: true
            },
            {
                animalType: 'Bird',
                breedName: 'Cockatiel',
                toyPreference: 'Swings & Bell Toys',
                activityLevel: 'Very chatty, but will enjoy cage time.',
                hypoallergenic: true
            },
            {
                animalType: 'Bird',
                breedName: 'Parakeet',
                toyPreference: 'Swings & Bell Toys',
                activityLevel: 'Prefers to be let out of its cage to stretch their wings often.',
                hypoallergenic: true
            },
            {
                animalType: 'Bird',
                breedName: 'Parrot',
                toyPreference: 'Swings & Bell Toys',
                activityLevel: 'Low energy, but requires plenty of attention.',
                hypoallergenic: true
            },
            {
                animalType: 'Horse',
                breedName: 'Standardbred',
                toyPreference: 'N/A',
                activityLevel: 'Needs plenty of hygiene care and attention.',
                hypoallergenic: true
            },
            {
                animalType: 'Horse',
                breedName: 'Mustang',
                toyPreference: 'N/A',
                activityLevel: 'High energy, requires a lot of time and attention to control this animal.',
                hypoallergenic: true
            },
            {
                animalType: 'Cow',
                breedName: 'Jersey',
                toyPreference: 'N/A',
                activityLevel: 'Low to moderate energy, enjoys grazing and leisurely walks.',
                hypoallergenic: false
            }

        ]
        const breeds = await Breed.insertMany(breedData)

        const animalData = [
            {
                name: "Oliver",
                animalType: "Dog",
                breed: breeds.find(breed => breed.breedName === 'Poodle')._id,
                image: "dog1.jpg",
                weight: "15 lbs",
                sex: "Male",
                age: "2 Years Old",
                description: "A sweet boy that is willing to love anyone.",
                color: "White",
                personality: ["Good with kids.", "Good with other dogs.", "Good with babies.", "Very clingy."],
            },
            {
                name: "Charlie",
                animalType: "Dog",
                breed: [breeds.find(breed => breed.breedName === 'Labrador Retriever')._id, breeds.find(breed => breed.breedName === 'Golden Retriever')._id],
                image: "dog2.jpg",
                weight: "44 lbs",
                sex: "Male",
                age: "3 Years Old",
                description: "A mischievous pup with a heart of gold.",
                color: "White / Brown",
                personality: ["Curious and playful.", "Quick learner.", "Affectionate with family members.", "Alert and watchful."]
            },
            {
                name: "Lucy",
                animalType: "Dog",
                breed: breeds.find(breed => breed.breedName === 'Labrador Retriever')._id,
                image: "chocolateLab.jpg",
                weight: "56 lbs",
                sex: "Female",
                age: "6 Months Old",
                description: "A playful sweetheart with boundless energy.",
                color: "Brown",
                personality: ["Highly intelligent.", "Lively and outgoing.", "Friendly with everyone.", "Active lifestyle required."]
            },
            {
                name: "Bella",
                animalType: "Dog",
                breed: breeds.find(breed => breed.breedName === 'Pug')._id,
                image: "pug1.jpg",
                weight: "15 lbs",
                sex: "Female",
                age: "3 Years Old",
                description: "An affectionate girl who loves to play.",
                color: "Tan",
                personality: ["Loyal companion.", "Energetic and playful.", "Affectionate with humans.", "Mild-mannered."]
            },
            {
                name: "Rocky",
                animalType: "Dog",
                breed: breeds.find(breed => breed.breedName === 'Yorkie')._id,
                image: "yorkie1.jpg",
                weight: "12 lbs",
                sex: "Male",
                age: "4 Years Old",
                description: "A loyal companion with a protective nature.",
                color: "Brown",
                personality: ["Highly trainable.", "Alert and vigilant.", "Playful streak."]
            },
            {
                name: "Simba",
                animalType: "Cat",
                breed: breeds.find(breed => breed.breedName === 'Toyger')._id,
                image: "cat2.jpg",
                weight: "11 lbs",
                sex: "Male",
                age: "2 Years Old",
                description: "An agile and intelligent feline with a distinctive short tail.",
                color: "Brown Striped",
                personality: ["Confident and proud.", "Enjoys grooming sessions.", "Prefers a calm and quiet environment.", "Affectionate with family members."]
            },
            {
                name: "Mochi",
                animalType: "Cat",
                breed: breeds.find(breed => breed.breedName === 'Toyger')._id,
                image: "toyger1.jpg",
                weight: "9 lbs",
                sex: "Female",
                age: "2 Years Old",
                description: "A sweet and gentle kitty with a playful disposition.",
                color: "Striped",
                personality: ["Gentle with children.", "Enjoys lounging in sunny spots.", "Affectionate with family members.", "Curious and sociable."]
            },
            {
                name: "Luna",
                animalType: "Cat",
                breed: breeds.find(breed => breed.breedName === 'Siamese')._id,
                image: "cat3.jpg",
                weight: "11 lbs",
                sex: "Female",
                age: "3 Years Old",
                description: "A graceful and intelligent feline with a sleek coat and striking blue eyes.",
                color: "Cream",
                personality: ["Affectionate and loyal.", "Highly vocal and expressive.", "Enjoys interactive play.", "Calm and composed demeanor."]
            },
            {
                name: "Whiskers",
                animalType: "Cat",
                breed: breeds.find(breed => breed.breedName === 'Siamese')._id,
                image: "cat1.jpg",
                weight: "10 lbs",
                sex: "Male",
                age: "3 Years Old",
                description: "An elegant and vocal feline.",
                color: "White and Spotted",
                personality: ["Affectionate with humans.", "Talkative and expressive.", "Enjoys interactive play.", "Loyal companion."]
            },
            {
                name: "Cleo",
                animalType: "Cat",
                breed: breeds.find(breed => breed.breedName === 'Sphynx')._id,
                image: "sphynx1.jpg",
                weight: "7 lbs",
                sex: "Female",
                age: "1 Year Old",
                description: "A playful and affectionate sphynx with different colored eyes.",
                color: "Tan",
                personality: ["Energetic and playful.", "Enjoys cuddling to keep warm.", "Gets along well with children.", "Adaptable to various environments."]
            },
            {
                name: "Sunny",
                animalType: "Bird",
                breed: breeds.find(breed => breed.breedName === 'Cockatiel')._id,
                image: "bird2.jpg",
                weight: "90 grams",
                sex: "Male",
                age: "1 Year Old",
                description: "A cheerful and playful cockatiel with vibrant feathers and a melodious chirp.",
                color: "White and Yellow",
                personality: ["Friendly and sociable.", "Enjoys interacting with humans.", "Loves to whistle tunes.", "Curious and intelligent."]
            },
            {
                name: "Kiwi",
                animalType: "Bird",
                breed: breeds.find(breed => breed.breedName === 'Parakeet')._id,
                image: "bird1.jpg",
                weight: "30 grams",
                sex: "Male",
                age: "6 Months Old",
                description: "A lively and colorful parakeet with a playful personality and a cheerful chirp.",
                color: "Blue and White",
                personality: ["Energetic and playful.", "Enjoys flying and exploring.", "Affectionate with humans.", "Quick learner."]
            },
            {
                name: "Rio",
                animalType: "Bird",
                breed: breeds.find(breed => breed.breedName === 'Parrot')._id,
                image: "parrot1.jpg",
                weight: "250 grams",
                sex: "Male",
                age: "4 Years Old",
                description: "A vibrant and outgoing parrot with a colorful plumage and a playful attitude.",
                color: "Yellow and Blue",
                personality: ["Playful and mischievous.", "Loves to dance to music.", "Bonded with human companions.", "Intelligent and eager to learn."]
            },
            {
                name: "Peppy",
                animalType: "Bird",
                breed: breeds.find(breed => breed.breedName === 'Cockatiel')._id,
                image: "bird3.jpg",
                weight: "80 grams",
                sex: "Female",
                age: "2 Years Old",
                description: "A spirited and affectionate cockatiel with a charming crest and a friendly disposition.",
                color: "Yellow",
                personality: ["Curious and inquisitive.", "Enjoys being petted.", "Loyal companion.", "Gentle and docile nature."]
            },
            {
                name: "Shadow",
                animalType: "Farm-Animal",
                breed: breeds.find(breed => breed.breedName === 'Standardbred')._id,
                image: "grayHorse.jpg",
                weight: "1200 lbs",
                sex: "Male",
                age: "7 Years Old",
                description: "A dependable and versatile standardbred gelding with a calm disposition and steady pace.",
                color: "Gray",
                personality: ["Steady and reliable.", "Patient and tolerant.", "Enjoys trail riding.", "Excellent for beginners."]
            },
            {
                name: "Spirit",
                animalType: "Farm-Animal",
                breed: breeds.find(breed => breed.breedName === 'Mustang')._id,
                image: "mustang1.jpg",
                weight: "1000 lbs",
                sex: "Male",
                age: "5 Years Old",
                description: "A wild and free-spirited mustang with a majestic presence and untamed spirit.",
                color: "Brown and White",
                personality: ["Independent and resilient.", "Strong-willed and courageous.", "Enjoys roaming vast open spaces.", "Trustworthy and loyal."]
            },
            {
                name: "Lightning",
                animalType: "Farm-Animal",
                breed: breeds.find(breed => breed.breedName === 'Standardbred')._id,
                image: "kidwithhorse2.jpg",
                weight: "1100 lbs",
                sex: "Male",
                age: "6 Years Old",
                description: "A swift and agile standardbred with a sleek coat and graceful gait.",
                color: "Brown",
                personality: ["Energetic and athletic.", "Loves to run and compete.", "Responsive and trainable.", "Affectionate and loyal."]
            },
            {
                name: "Molly",
                animalType: "Farm-Animal",
                breed: breeds.find(breed => breed.breedName === 'Jersey')._id,
                image: "brownCow.jpg",
                weight: "1200 lbs",
                sex: "Female",
                age: "4 Years Old",
                description: "A friendly and curious Jersey cow with a beautiful brown coat and gentle eyes.",
                color: "Brown",
                personality: ["Gentle and affectionate nature.", "Enjoys grazing in the pasture.", "Loyal to her herdmates.", "Intelligent and observant."]
            },
            {
                name: "Princess",
                animalType: "Farm-Animal",
                breed: breeds.find(breed => breed.breedName === 'Jersey')._id,
                image: "cow1.jpg",
                weight: "1100 lbs",
                sex: "Female",
                age: "5 Years Old",
                description: "A beautiful Jersey cow with a delicate build and a calm disposition.",
                color: "Black and White",
                personality: ["Strong and reliable.", "Enjoys grazing and resting.", "Protective of her herd.", "Gentle with humans."]
            }
        ]
        const animals = await Animal.insertMany(animalData)

        const productData = [
            {
                name: "Premium Dog Food",
                productType: "Food",
                image:'dogFood.jpg',
                description: "High-quality and nutritious dog food formulated for all breeds and sizes.",
                price: 25.99,
                quantity: 100
            },
            {
                name: "High-Quality Cat Food",
                productType: "Food",
                image:'catFood1.jpg',
                description: "Nutritious cat food made with real meat and essential vitamins for optimal health.",
                price: 19.99,
                quantity: 80
            },
            {
                name: "Natural Puppy Food",
                productType: "Food",
                image:'puppyFood.jpg',
                description: "Wholesome and natural food specially formulated for growing puppies.",
                price: 29.99,
                quantity: 60
            },
            {
                name: "Grain-Free Senior Dog Food",
                productType: "Food",
                image:'dogFood2.jpg',
                description: "Specially crafted grain-free formula for senior dogs with sensitive stomachs.",
                price: 34.99,
                quantity: 50
            },
            {
                name: "Organic Kitten Food",
                productType: "Food",
                image:'catFood2.jpg',
                description: "Certified organic kitten food made with real chicken and fish for optimal growth.",
                price: 22.99,
                quantity: 70
            },
            {
                name: "Gourmet Dog Treats",
                productType: "Treats",
                image:'dogTreats1.jpg',
                description: "Delicious and nutritious treats made with premium ingredients for your canine companion.",
                price: 8.99,
                quantity: 120
            },
            {
                name: "Healthy Cat Treats",
                productType: "Treats",
                image:'catTreats.jpg',
                description: "Healthy and flavorful treats packed with essential nutrients for your feline friend.",
                price: 6.99,
                quantity: 100
            },
            {
                name: "Crunchy Puppy Treats",
                productType: "Treats",
                image:'dogTreats2.jpg',
                description: "Crunchy and satisfying treats specially designed for teething puppies.",
                price: 10.99,
                quantity: 90
            },
            {
                name: "Dental Chews for Dogs",
                productType: "Treats",
                image:'dogTreats3.jpg',
                description: "Dental chews that promote healthy teeth and gums while providing a tasty treat for your dog.",
                price: 12.99,
                quantity: 80
            },
            {
                name: "Freeze-Dried Salmon Treats for Cats",
                productType: "Treats",
                image:'catTreats2.jpg',
                description: "Irresistible freeze-dried salmon treats that cats love, packed with omega-3 fatty acids for a healthy coat.",
                price: 14.99,
                quantity: 70
            },
            {
                name: "Orthopedic Dog Bed",
                productType: "Beds",
                image:'dogBed2.jpg',
                description: "Luxurious orthopedic bed designed to provide ultimate comfort and support for dogs of all sizes.",
                price: 69.99,
                quantity: 40
            },
            {
                name: "Plush Cat Bed with Removable Cushion",
                productType: "Beds",
                image:'catBed2.jpg',
                description: "Soft and cozy cat bed with a removable cushion for easy cleaning, perfect for lounging and napping.",
                price: 39.99,
                quantity: 60
            },
            {
                name: "Cozy Puppy Bed for Small Breeds",
                productType: "Beds",
                image:'dogBed1.jpg',
                description: "Snug and warm bed designed specifically for small breed puppies, providing a sense of security.",
                price: 29.99,
                quantity: 50
            },
            {
                name: "Elevated Cooling Bed for Dogs",
                productType: "Beds",
                image:'dogBed3.jpg',
                description: "Elevated dog bed with a breathable mesh fabric that keeps pets cool and comfortable in warm weather.",
                price: 49.99,
                quantity: 30
            },
            {
                name: "Washable Fleece Bedding for Kittens",
                productType: "Beds",
                image:'catBed1.jpg',
                description: "Soft and washable fleece bedding that provides warmth and comfort for kittens.",
                price: 19.99,
                quantity: 70
            },
            {
                name: "Interactive Dog Toy Ball with Treat Dispenser",
                productType: "Toys",
                image:'dogToy1.jpg',
                description: "Interactive toy ball that dispenses treats as your dog plays, keeping them mentally and physically stimulated.",
                price: 15.99,
                quantity: 60
            },
            {
                name: "Chew Rope for Puppies",
                productType: "Toys",
                image:'dogToy2.jpg',
                description: "Durable chew rope made from natural materials, perfect for teething puppies and promoting dental health.",
                price: 9.99,
                quantity: 70
            },
            {
                name: "Squeaky Plush Toy for Dogs",
                productType: "Toys",
                image:'dogToy3.jpg',
                description: "Adorable plush toy with a built-in squeaker that keeps dogs entertained for hours, promoting active play.",
                price: 11.99,
                quantity: 90
            },
            {
                name: "Catnip Mice Toy Set for Kittens",
                productType: "Toys",
                image:'catToys.jpg',
                description: "Set of catnip-infused mice toys that entice kittens to play and exercise, satisfying their natural instincts.",
                price: 13.99,
                quantity: 50
            },
            {
                name: "Nutritious Bird Seed Mix",
                productType: "Food",
                image:'birdFood.jpg',
                description: "A balanced blend of seeds, nuts, and fruits to meet the dietary needs of all types of pet birds.",
                price: 12.99,
                quantity: 50
            },
            {
                name: "Tropical Fruit Treat Sticks",
                productType: "Treats",
                image:'birdTreats.jpg',
                description: "Delicious treat sticks enriched with tropical fruits and fortified with vitamins for birds' overall health.",
                price: 6.99,
                quantity: 40
            },
            {
                name: "Large Metal Bird Cage",
                productType: "Beds",
                image:'birdBed.jpg',
                description: "Spacious and sturdy metal cage with multiple perches and feeding bowls, suitable for small to medium-sized birds.",
                price: 49.99,
                quantity: 20
            },
            {
                name: "Colorful Wooden Bird Swing",
                productType: "Toys",
                image:'birdToys.jpg',
                description: "Wooden swing with dangling toys to keep birds entertained and engaged.",
                price: 8.99,
                quantity: 30
            },
            {
                name: "All-Natural Horse Feed Pellets",
                productType: "Food",
                image:'horseFood.jpg',
                description: "Premium-quality horse feed pellets made from all-natural ingredients to support optimal health and performance.",
                price: 29.99,
                quantity: 50
            },
            {
                name: "Apple Flavored Horse Treats",
                productType: "Treats",
                image:'horseFood2.jpg',
                description: "Delicious apple-flavored treats packed with vitamins and minerals, perfect for rewarding horses during training sessions.",
                price: 9.99,
                quantity: 40
            },
            {
                name: "Ceramic Bird Bath Bowl",
                productType: "Accessories",
                image:'birdBath.jpg',
                description: "Durable ceramic bird bath bowl that easily attaches to any cage, providing birds with a refreshing bathing experience.",
                price: 14.99,
                quantity: 25
            },
            {
                name: "Complete Horse Grooming Kit",
                productType: "Accessories",
                image:'horseCare.jpg',
                description: "Comprehensive grooming kit including brushes, combs, hoof picks, and grooming supplies for keeping horses clean and healthy.",
                price: 49.99,
                quantity: 30
            },
            {
                name: "Reflective Cat Collar with Bell",
                productType: "Accessories",
                image:'catCollar.jpg',
                description: "Adjustable nylon cat collar with a reflective strip for added visibility and a bell to help locate your cat.",
                price: 7.99,
                quantity: 50
            },
            {
                name: "Tall Sisal Cat Scratching Post",
                productType: "Accessories",
                image:'catPost.jpg',
                description: "Durable sisal scratching post designed to satisfy cats' natural scratching instincts and promote healthy claws.",
                price: 29.99,
                quantity: 40
            },
            {
                name: "Reflective Dog Leash",
                productType: "Accessories",
                image:'dogCollar.jpg',
                description: "Durable nylon dog leash with reflective stitching for enhanced visibility during nighttime walks.",
                price: 12.99,
                quantity: 50
            },
            {
                name: "Dog Training Clicker with Wrist Strap",
                productType: "Accessories",
                image:'dogClicker.jpg',
                description: "Clicker training tool with a wrist strap for convenient use during obedience training and behavior shaping.",
                price: 6.99,
                quantity: 60
            },
            {
                name: "Adjustable Dog Harness with Handle",
                productType: "Accessories",
                image:'dogHarness.jpg',
                description: "Comfortable and secure dog harness with a sturdy handle for better control during walks and outdoor activities.",
                price: 18.99,
                quantity: 40
            }
        ]

        const products = await Product.insertMany(productData)

        console.log('Data seeded successfully');
        process.exit();
    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
})