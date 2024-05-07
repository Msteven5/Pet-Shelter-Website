import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_ANIMALS } from '../utils/queries'
import './animal.css'

const Animal = () => {

    const { data, error } = useQuery(GET_ANIMALS);
    const animals = data ? data.getAnimals : [];

    return (
        <>
            <div className="container">
                <div className="row row-cols-1 row-cols-xlg-3 row-cols-md-3 g-4 flex-fill my-3">
                    {animals.map((animal) => (
                        <div key={animal._id} className="col" >
                            <div className="card mb-4" style={{ width: '24rem', height: '550px' }}>
                                <img src={`/images/${animal.image}`} className="card-img-top" height="250px" alt="..." />
                                <div className="card-body">
                                    <h3 className={animal.sex === "Male" ? "text-primary" : "pinkText"}>{animal.name}</h3>
                                    <p className="card-text">Description: {animal.description}</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Sex: {animal.sex}</li>
                                    <li className="list-group-item">Breed: {animal.breed.map(breed => breed.breedName).join(" / ")}</li>
                                    <li className="list-group-item">Status: {animal.available}</li>
                                </ul>
                                <div className="d-flex align-items-center py-2 justify-content-center">
                                    <Link to={`/pet/${animal._id}`}>
                                        <button type="button" className="btn btn-outline-info px-2 me-sm-3 fw-bold">Learn More</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
};

export default Animal;