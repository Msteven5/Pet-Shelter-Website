const typeDefs = `
    type Animal {
        _id: ID
        name: String!
        animalType: String!
        breed: [Breed]
        image: String!
        weight: String!
        sex: String!
        age: String!
        description: String!
        color: String!
        personality: [String]
        spayedNeutered: Boolean!
        available: String!
        saved: Boolean!
    }
    
    type Breed {
        _id: ID
        animalType: String!
        breedName: String!
        toyPreference: String!
        activityLevel: String!
        hypoallergenic: Boolean!
    }
    
    type Product {
        _id: ID
        name: String!
        productType: String!
        description: String!
        price: Float!
        quantity: Int!
        inCart: Boolean!
    }
    
    type User {
        _id: ID
        firstName: String!
        lastName: String!
        email: String!
        password: String!
    }
    
    #Creates JWT authentication token
    type Auth {
        token: ID! #JWT Token
        user: User! #Authenticated User
    }

    #Input data for adding and updating users
    input UserData {
        firstName: String!
        lastName: String!
        email: String!
        password: String!
    }

    #Input data for adding and updating animals
    input AnimalData {
        _id: ID
        name: String!
        animalType: String!
        breed: [BreedData]
        image: String!
        weight: String!
        sex: String!
        age: String!
        description: String!
        color: String!
        personality: [String]
        spayedNeutered: Boolean!
        available: String!
        saved: Boolean!
    }
    
    #Input data for creating breeds
    input BreedData {
        _id: ID
        animalType: String!
        breedName: String!
        toyPreference: String!
        activityLevel: String!
        hypoallergenic: Boolean!
    }
    
    #Input data for creating and updating products
    input ProductData {
        _id: ID
        name: String!
        productType: String!
        description: String!
        price: Float!
        quantity: Int!
        inCart: Boolean!
    }


    type Query {
        getAnimals: [Animal]        #Get all animals
        getAnimalsByType(animalType: String!): [Animal] #Filter animals by type
        getSingleAnimal(_id: ID): Animal #Get an animal by their ID

        getProducts: [Product]      #Get all products
        getProductsByType(productType: String!): [Product] #Filter products by type
        getSingleProduct(_id: ID): Product #Get a product by its ID

        getBreeds: [Breed]          #Get all breeds
        getBreedsByType(animalType: String!): [Breed] #Filter breed by type
        getSingleBreed(_id: ID): Breed #Get a breed by its ID

        getUsers: [User]            #Get all users
        getSingleUser(_id: ID): User #Get a user by their ID
    }
    
    type Mutation {
        addUser(user: UserData): Auth                           #Add a new user
        loginUser(email: String!, password: String!): Auth!     #Login function
        logout: String!                                         #Logout function
        updateUser(_id: ID!, user: UserData): Auth              #Update existing user info

        addAnimal(animal: AnimalData): Animal                   #Add a new animal
        updateAnimal(_id: ID!, animal: AnimalData): Animal      #Update animal information
        deleteAnimal(_id: ID!): Animal                          #Remove animal from the database
        
        addBreed(breed: BreedData): Breed                       #Add a new breed
        updateBreed(_id: ID!, breed: BreedData): Breed          #Update breed information
        
        addProduct(product: ProductData): Product               #Add a new product
        updateProduct(_id: ID!, product: ProductData): Product  #Update a products information
        deleteProduct(_id: ID!): Product                        #Remove product from the database
    }   
`;

module.exports = typeDefs