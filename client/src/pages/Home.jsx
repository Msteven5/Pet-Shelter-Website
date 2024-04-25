import './home.css'
import Logo from '/images/animal shelter logo1.jpg'
import PetandOwner from '/images/dogandowner1.jpg'
import KidWithHorse from '/images/kidwithhorses.jpg'

const Home = () => {
    return (
        <>
            <div>
                <main>
                    <div className="px-4 pb-4 text-center">
                        <img className="d-block mx-auto mb-4" src={Logo} height="200px" />
                        <h1 className="display-5 fw-bold lightText">Michael's Animal Rescue Agency</h1>
                        <div className="col-lg-6 mx-auto">
                            <p className="lead mb-4">A rescue agency dedicated to the wellbeing of all animals from house pets to farm animals. We are a modern rescue that nurtures young animals and sees to the comfort of our senior animals. Please look around and see if we have the right animal for you!</p>
                            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Available Animals</button>
                                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Donate</button>
                            </div>
                        </div>
                    </div>

                    <div className="b-example-divider"></div>
                    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"
                                aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>

                        <div className="carousel-inner">
                            <div className="carousel-item active" id="carousel1">
                                <div className="d-flex justify-content-center" id="title-container">
                                </div>
                                <div className="container">
                                    <div className="carousel-caption text-start">
                                        <h1 className='text-white'>A Fully Inclusive Animal Rescue</h1>
                                        <p>We welcome all types of animals and create a calming environment so everyone is at their best for adoption.</p>
                                        <p><a className="btn btn-md gold-background text-light btn-dark" href="/Booking">Available Animals</a></p>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item" id="carousel2">

                                <div className="container">
                                    <div className="carousel-caption">
                                        <h1 className='text-white'>All Pets Get The Best Care Here</h1>
                                        <p>With several onsite veterinarians, all pets get immediate care once on site. We'll make sure that the animal you choose is in the best condition to go to its forever home!</p>
                                        <p><a className="btn btn-md gold-background text-light btn-dark" href="#">About Us</a></p>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item" id="carousel3">

                                <div className="container">
                                    <div className="carousel-caption text-end">
                                        <h1 className='text-white'>Our Services Don't Stop At Adoption</h1>
                                        <p>We want to make sure you have the resources to take good care of your newly adopted animal. Please have a look at our breed specific care instructions anytime!</p>
                                        <p><a className="btn btn-md gold-background text-light btn-dark" href="#staff">Pet Care Instructions</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                    <div className="b-example-divider"></div>

                    <div className="container col-xxl-8 px-4 py-5">
                        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                            <div className="col-10 col-sm-8 col-lg-6">
                                <img src={PetandOwner} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                            </div>
                            <div className="col-lg-6">
                                <h1 className="display-5 fw-bold lh-1 mb-3">We Do Our Best To Keep You Informed</h1>
                                <p className="lead">Every animal we offer has personality traits we've observed to help you make the best decision for yourself and your future "fur-ever" pet. Need an animal that's good with other pets? Or one that doesn't require a lot of excersize? All things that will be answered on each pet's profile!</p>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Available Animals</button>
                                    <button type="button" className="btn btn-outline-secondary btn-lg px-4">Volunteer</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="b-example-divider"></div>

                    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
                        <div className="row align-items-center g-lg-5 py-5">
                            <div className="col-lg-7 text-center text-lg-start">
                                <h1 className="display-4 fw-bold lh-1 mb-3">Sign Up To Begin The Adoption Process</h1>
                                <p className="col-lg-10 fs-4">By creating an account, you can save animals to your profile for later adoption, as well as begin the process of adopting the animal of your choice!</p>
                            </div>
                            <div className="col-md-10 mx-auto col-lg-5">
                                <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
                                <h5 className='text-center darkText fs-6 mb-3'>* We Won't Send You Obnoxious Spam Emails, We Promise! *</h5>
                                    <div className="form-floating mb-3">
                                        <input type="firstName" className="form-control" id="floatingFirst" placeholder="First Name" />
                                        <label for="floatingFirst">First Name</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="lastName" className="form-control" id="floatingLast" placeholder="Last Name" />
                                        <label for="floatingLast">Last Name</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                        <label for="floatingInput">Email address</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                        <label for="floatingPassword">Password</label>
                                    </div>
                                    <div className="checkbox mb-3">
                                        <label>
                                            <input type="checkbox" value="remember-me" /> Remember me
                                        </label>
                                    </div>
                                    <button className="w-100 btn btn-lg darkBackground text-white btn-primary" type="submit">Sign up</button>
                                    <hr className="my-4" />
                                    <small className="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="b-example-divider"></div>

                    <div className="container col-xxl-8 px-4 py-5">
                        <div className="row flex-lg-row align-items-center g-5 py-5">
                            <div className="col-10 col-sm-8 col-lg-6">
                                <img src={KidWithHorse} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                            </div>
                            <div className="col-lg-6">
                                <h1 className="display-5 fw-bold lh-1 mb-3">We're More Than Just Your Typical House Pets</h1>
                                <p className="lead">At Michael's Animal Rescue Agency, we take in all kinds of animals from cats to cows. If you're looking for a new addition to your farm family, we may just have the one for you!</p>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Available Farm Animals</button>
                                    <button type="button" className="btn btn-outline-secondary btn-lg px-4">Pet Care Instructions</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="b-example-divider"></div>

                    <div className="px-4 py-5 text-center">
                        <div className="py-5">
                            <h1 className="display-5 fw-bold">Checkout Our Pet Supply Store!</h1>
                            <div className="col-lg-6 mx-auto">
                                <p className="fs-5 mb-4">We offer a variety of products for your pet's needs. All proceeds go to the shelter and improving our resident's way of life. We offer everything from food to beds and everything in between.</p>
                                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                                    <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Pet Food</button>
                                    <button type="button" className="btn btn-outline-secondary btn-lg px-4">Pet Beds</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="b-example-divider mb-0"></div>
                </main>
            </div>
        </>
    )
};

export default Home;