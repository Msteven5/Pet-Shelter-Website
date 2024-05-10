import { useQuery } from '@apollo/client';
import { GET_ANIMALS } from '../utils/queries'
import './animal.css'
import AnimalList from '../components/AnimalList';

const Animal = () => {

    const { data, error } = useQuery(GET_ANIMALS);
    const animals = data ? data.getAnimals : [];

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

export default Animal;