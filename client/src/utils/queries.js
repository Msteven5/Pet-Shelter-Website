import { gql } from '@apollo/client';

export const GET_ANIMALS = gql`
  query GetAnimals {
    getAnimals {
        _id
        name
        animalType
        breed {
            _id
            animalType
            breedName
            toyPreference
            activityLevel
            hypoallergenic
        }
        image
        weight
        sex
        age
        description
        color
        personality
        spayedNeutered
        available
        saved
      }
    }
`;

export const GET_ANIMALS_BY_TYPE = gql`
query GetAnimalsByType($animalType: String!) {
    getAnimalsByType(animalType: $animalType) {
        _id
        name
        animalType
        breed {
            _id
            animalType
            breedName
            toyPreference
            activityLevel
            hypoallergenic
        }
        image
        weight
        sex
        age
        description
        color
        personality
        spayedNeutered
        available
        saved
    }
}
`;

export const GET_SINGLE_ANIMAL= gql`
query GetSingleAnimal($_id: ID!) {
    getSingleAnimal(_id: $_id) {
        _id
        name
        animalType
        breed {
            _id
            animalType
            breedName
            toyPreference
            activityLevel
            hypoallergenic
        }
        image
        weight
        sex
        age
        description
        color
        personality
        spayedNeutered
        available
        saved
    }
}
`

export const GET_PRODUCTS = gql`
  query GetProducts {
    getProducts {
        _id
        name
        productType
        image
        description
        price
        quantity
        inCart
      }
    }
`;

export const GET_PRODUCTS_BY_TYPE = gql`
  query GetProductsByType($productType: String!) {
    getProductsByType(productType: $productType) {
        _id
        name
        productType
        image
        description
        price
        quantity
        inCart
      }
    }
`;

export const GET_SINGLE_PRODUCT = gql`
  query GetSingleProduct($_id: ID!) {
    getSingleProduct(_id: $_id) {
        _id
        name
        productType
        image
        description
        price
        quantity
        inCart
      }
    }
`;

export const GET_BREEDS = gql`
  query GetBreeds {
    getBreeds {
        _id
        animalType
        breedName
        toyPreference
        activityLevel
        hypoallergenic
      }
    }
`;

export const GET_BREEDS_BY_TYPE = gql`
  query GetBreedsByType($animalType: String!) {
    getBreedsByType(animalType: $animalType) {
        _id
        animalType
        breedName
        toyPreference
        activityLevel
        hypoallergenic
      }
    }
`;

export const GET_SINGLE_BREED = gql`
  query GetSingleBreed($_id: ID!) {
    getSingleBreed(_id: $_id) {
        _id
        animalType
        breedName
        toyPreference
        activityLevel
        hypoallergenic
      }
    }
`;

export const GET_USERS = gql`
  query GetUsers {
    getUsers {
        _id
        firstName
        lastName
        email
      }
    }
`;

export const GET_SINGLE_USER = gql`
  query GetSingleUser($_id: ID!) {
    getSingleUser(_id: $_id) {
        _id
        firstName
        lastName
        email
      }
    }
`;