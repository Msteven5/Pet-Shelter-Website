import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation AddUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const LOGIN_USER = gql`
mutation LoginUser($email: String!, $password: String!) {
  loginUser(email: $email, password: $password) {
    token
    user {
      _id
      firstName
      lastName
    }
  }
}
`;

export const UPDATE_USER = gql`
  mutation UpdateUser(
    $_id: ID!
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    updateUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        firstName
        lastName
        email
      }
    }
  }
`;

export const ADD_ANIMAL = gql`
  mutation AddAnimal($animal: AnimalData!) {
    addAnimal(animal: $animal) {
        _id
        name
        animalType
        breedId
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

export const UPDATE_ANIMAL = gql`
  mutation UpdateAnimal($_id: ID!, $animal: AnimalData!) {
    updateAnimal(_id: $_id, animal: $animal) {
        _id
        name
        animalType
        breedId
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

export const DELETE_ANIMAL = gql`
  mutation DeleteAnimal($_id: ID!) {
    deleteAnimal(_id: $_id) {
        _id
    }
  }
`;

export const ADD_BREED = gql`
  mutation AddBreed($breed: BreedData) {
    addBreed(breed: $breed) {
        _id
        animalType
        breedName
        toyPreference
        activityLevel
        hypoallergenic
    }
  }
`;

export const UPDATE_BREED = gql`
  mutation UpdateBreed($_id: ID!, $breed: BreedData!) {
    updateBreed(_id: $_id, breed: $breed) {
        _id
        animalType
        breedName
        toyPreference
        activityLevel
        hypoallergenic
    }
  }
`;

export const ADD_PRODUCT = gql`
  mutation AddProduct($product: ProductData!) {
    addProduct(product: $product) {
        _id
        name
        productType
        description
        price
        quantity
        inCart
    }
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation UpdateProduct($_id: ID!, $product: ProductData!) {
    UpdateProduct(_id: $_id, product: $product) {
        _id
        name
        productType
        description
        price
        quantity
        inCart
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation DeleteProduct($_id: ID!) {
    deleteProduct(_id: $_id) {
        _id
    }
  }
`;