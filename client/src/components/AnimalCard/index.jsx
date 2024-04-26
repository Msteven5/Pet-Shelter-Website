
const AnimalCard = ({ _id, name, animalType, age, sex, weight, image, color, breed, toyPreference, hypoallergenic, activityLevel, description, personality, spayedNeutered, available }) => {

    return (
        <>

            <div className="card mt-2">
                <div className="p-2 px-4 d-flex align-items-center row">
                    <h5 className="mb-0 col-10 fw-semibold">
                        {breed}
                        {toyPreference}
                        {hypoallergenic}
                        {activityLevel}
                    </h5>
                </div>

                <div id={_id} aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body d-flex justify-content-center" >
                        <div className='row w-100'>
                            <img className='col flex-grow-0 mx-auto' height="300" src={image}></img>
                            <div className='col carInfo bg-dark fw-bolder text-white fs-5 d-flex align-items-center justify-content-center flex-column'>
                                <p className='text-center mt-3'>Name: {name}</p>
                                <p className='text-center'> Breed: {breed}</p>
                                <p className='text-center'>Pet Type: {animalType}</p>
                                <p className='text-center'>Color: {color}</p>
                                <p className='text-center'>Spayed/Neutered? : {JSON.stringify(spayedNeutered)}</p>
                                <p className='text-center'>Personality: {personality}</p>
                                <p className='text-center'>Available? : {available}</p>
                                <p className='text-center'>Description: {description}</p>
                                <p className='text-center'>Sex: {sex}</p>
                                <p className='text-center'>Weight: {weight}</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AnimalCard;