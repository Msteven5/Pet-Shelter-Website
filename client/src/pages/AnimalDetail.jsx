import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_SINGLE_ANIMAL } from '../utils/queries';
import './animal.css'

const AnimalDetail = () => {

    const { id } = useParams();

    const { data, error } = useQuery(GET_SINGLE_ANIMAL, {
        variables: { _id: id }
    });

    const animal = data ? data.getSingleAnimal : [];
    console.log(animal)

    const toyPreference = new Set();
    let hypoallergenic = "No";
    const activityLevel = new Set();

    if (Array.isArray(animal.breed)) {
        animal.breed.forEach((breed) => {
            if (breed.toyPreference) {
                toyPreference.add(breed.toyPreference);
            }
            if (breed.hypoallergenic === true) {
                hypoallergenic = "Yes";
            }
            if (breed.activityLevel) {
                activityLevel.add(breed.activityLevel);
            }
        });
    }

    return (
        <>
            <div className="container">
                <Link to='/pets'>
                    <button type="button" className="btn btn-outline-dark border-2 bg-info px-2 mt-4 me-sm-3 fw-bold">Back to Animals</button>
                </Link>
                <div className="row mt-3 d-flex align-items-center">

                    <img src={`/images/${animal.image}`} className="col border border-4 rounded-2 px-0 border-white flex-grow-0 mx-auto" height="550px" alt={`picture of ${animal.animalType} named ${animal.name} and they're ${animal.color} `} />

                    <div key={animal._id} className="col" >
                        <div className="card mt-2 mb-2 border border-4 border-dark" style={{ width: '100%', height: 'auto' }}>
                            <div className="card-body text-center">
                                <h1 className={animal.sex === "Male" ? "text-primary" : "pinkText"}>{animal.name}</h1>
                                <div>
                                    <p className="card-text">Description: {animal.description}</p>
                                </div>
                            </div>
                            <ul className="list-group list-group-flush text-center">
                                <li className="list-group-item">Sex: {animal.sex}</li>
                                <li className="list-group-item">Breed: {animal.breed ? animal.breed.map(breed => breed.breedName).join(" / ") : "Unknown"}</li>
                                <li className="list-group-item">Toy Preference: {Array.from(toyPreference).join(" / ") || "Unknown"}</li>
                                <li className="list-group-item">Hypoallergenic: {hypoallergenic}</li>
                                <li className="list-group-item">Activity Level: {Array.from(activityLevel).join(" / ") || "Unknown"}</li>
                                <li className="list-group-item">Age: {animal.age}</li>
                                <li className="list-group-item">Weight: {animal.weight}</li>
                                <li className="list-group-item">Personality: {animal.personality ? animal.personality.map(trait => trait).join(" | ") : "Unknown"}</li>
                                <li className="list-group-item">Spayed / Neutered: {animal.spayedNeutered ? "Yes" : "No"}</li>
                                <li className="list-group-item">Color: {animal.color}</li>
                                <li className="list-group-item">Status: {animal.available}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
};

export default AnimalDetail;