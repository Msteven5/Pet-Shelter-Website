import { useState, useEffect } from "react";
import { useQuery, useMutation } from '@apollo/client';
import { GET_ANIMALS, GET_ANIMALS_BY_TYPE } from '../utils/queries'
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
                <div className="card" style={{ width: '24rem', height: '500px' }}>
                    <img src={`/images/${animal.image}`} className="card-img-top" height="200px" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{animal.name}</h5>
                        <p className="card-text">Description: {animal.description}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Sex: {animal.sex}</li>
                        <li className="list-group-item">Breed: { animal.breed.map(breed => breed.breedName) }</li>
                        <li className="list-group-item">Available to Adopt? : {animal.available}</li>
                    </ul>
                    <div className="card-body d-flex justify-content-center">
                        <button type="button" className="btn btn-outline-info px-2 me-sm-3 fw-bold">Learn More</button>
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