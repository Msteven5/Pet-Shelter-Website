import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';

const AnimalList = ({_id, image, name, description, sex, breed, available}) => {

    useEffect(() => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = `/images/${image}`;
        link.as = 'image';
        document.head.appendChild(link);

        return () => {
            document.head.removeChild(link);
        };
    }, [image]);
    

    return (
        <div key={_id} className="col" >
            <div className="card mb-4 border border-2 border-black" style={{ width: '24rem', height: '560px' }}>
                <img src={`/images/${image}`} className="card-img-top" height="250px" alt="..." />
                <div className="card-body">
                    <h3 className={sex === "Male" ? "text-primary" : "pinkText"}>{name}</h3>
                    <p className="card-text">Description: {description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Sex: {sex}</li>
                    <li className="list-group-item">Breed: {breed}</li>
                    <li className="list-group-item">Status: {available}</li>
                </ul>
                <div className="d-flex align-items-center py-2 justify-content-center">
                    <Link to={`/pet/${_id}`}>
                        <button type="button" className="btn btn-outline-info px-2 me-sm-3 fw-bold">Learn More</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AnimalList;