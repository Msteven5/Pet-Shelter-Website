import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import AnimalList from '../components/AnimalList'
import { GET_ANIMALS_BY_TYPE } from '../utils/queries';
import './animal.css'

const AnimalByType = () => {

    const { type } = useParams();

    const { data, error } = useQuery(GET_ANIMALS_BY_TYPE, {
        variables: { animalType: type }
    });

    const animals = data ? data.getAnimalsByType : [];
    console.log(animals)

    return (
        <>
            <div className="container">
                <div className="row row-cols-1 row-cols-xlg-3 row-cols-md-3 g-4 flex-fill my-3">
                    {animals.map((animal) => (
                        <AnimalList
                            _id={animal._id}
                            image={animal.image}
                            name={animal.name}
                            description={animal.description}
                            sex={animal.sex}
                            breed={animal.breed.map(breed => breed.breedName).join(" / ")}
                            available={animal.available} />
                    ))}
                </div>
            </div>
        </>
    )
};

export default AnimalByType;