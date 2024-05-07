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
    return (
        <>
            <div className="container">
                <div className="row mt-5">

                    <img src={`/images/${animal.image}`} className="col mt-5 flex-grow-0 mx-auto" height="600px" alt={`picture of ${animal.animalType} named ${animal.name} and they're ${animal.color} `} />

                    <div key={animal._id} className="col" >
                        <div className="card mt-5" style={{ width: '100%', height: '600px' }}>
                            <div className="card-body text-center">
                                <h1 className={animal.sex === "Male" ? "text-primary" : "pinkText"}>{animal.name}</h1>
                                <div className='d-flex align-items-center h-50'>
                                    <p className="card-text">Description: {animal.description}</p>
                                </div>
                            </div>
                            <ul className="list-group list-group-flush text-center">
                                <li className="list-group-item">Sex: {animal.sex}</li>
                                <li className="list-group-item">Breed: {animal.breed ? animal.breed.map(breed => breed.breedName).join(" / ") : "Unknown"}</li>
                                <li className="list-group-item">Age: {animal.age}</li>
                                <li className="list-group-item">Weight: {animal.weight}</li>
                                <li className="list-group-item">Personality: {animal.personality ? animal.personality.map(trait => trait).join(" | ") : "Unknown"}</li>
                                <li className="list-group-item">Spayed / Neutered: {animal.spayedNeutered ? "Yes" : "No"}</li>
                                <li className="list-group-item">Color: {animal.color}</li>
                                <li className="list-group-item">Status: {animal.available}</li>
                            </ul>
                            <div className="card-body d-flex align-items-center justify-content-center">
                                <Link to='/pets'>
                                    <button type="button" className="btn btn-outline-info px-2 me-sm-3 fw-bold">Back to Animals</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
};

export default AnimalDetail;