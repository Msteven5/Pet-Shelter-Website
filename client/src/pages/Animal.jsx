import AnimalCard from "../components/AnimalCard";
import { useState, useEffect } from "react";
import { useQuery, useMutation } from '@apollo/client';
import { GET_ANIMALS, GET_ANIMALS_BY_TYPE } from '../utils/queries'

const Animal = () => {

    const { data, error } = useQuery(GET_ANIMALS);
    const animals = data ? data.getAnimals : [];
    console.log(animals.breed._id)
    // const breedData = animals.breed.map(breed =>
    //     breed.hypoallergenic,
    //     breed.activityLevel,
    //     breed.activityLevel)

    return (
        <>
            {animals.map((animal) => (
                <AnimalCard
                    _id={animal._id}
                    image={animal.image}
                    name={animal.name}
                    animalType={animal.animalType}
                    age={animal.age}
                    sex={animal.sex}
                    weight={animal.weight}
                    color={animal.color}
                    breed={animal.breed.breedName}
                    toyPreference={animal.breed.toyPreference}
                    hypoallergenic={animal.breed.hypoallergenic}
                    activityLevel={animal.breed.activityLevel}
                    description={animal.description}
                    personality={animal.personality}
                    spayedNeutered={animal.spayedNeutered}
                    available={animal.available}

                />

            ))
            }

        </>
    )
};

export default Animal;