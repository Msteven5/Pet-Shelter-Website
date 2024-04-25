import './home.css'

const Home = () => {
    return (
        <>
            <div>

                <div className="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
                    <button className="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
                        id="bd-theme"
                        type="button"
                        aria-expanded="false"
                        data-bs-toggle="dropdown"
                        aria-label="Toggle theme (auto)">
                        <svg className="bi my-1 theme-icon-active" width="1em" height="1em"><use href="#circle-half"></use></svg>
                        <span className="visually-hidden" id="bd-theme-text">Toggle theme</span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bd-theme-text">
                        <li>
                            <button type="button" className="dropdown-item d-flex align-items-center" data-bs-theme-value="light" aria-pressed="false">
                                <svg className="bi me-2 opacity-50" width="1em" height="1em"><use href="#sun-fill"></use></svg>
                                Light
                                <svg className="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
                            </button>
                        </li>
                        <li>
                            <button type="button" className="dropdown-item d-flex align-items-center" data-bs-theme-value="dark" aria-pressed="false">
                                <svg className="bi me-2 opacity-50" width="1em" height="1em"><use href="#moon-stars-fill"></use></svg>
                                Dark
                                <svg className="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
                            </button>
                        </li>
                        <li>
                            <button type="button" className="dropdown-item d-flex align-items-center active" data-bs-theme-value="auto" aria-pressed="true">
                                <svg className="bi me-2 opacity-50" width="1em" height="1em"><use href="#circle-half"></use></svg>
                                Auto
                                <svg className="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
                            </button>
                        </li>
                    </ul>
                </div>

            </div>


            <main>
                <h1 className="visually-hidden">Heroes examples</h1>

                <div className="px-4 py-5 my-5 text-center">
                    <img className="d-block mx-auto mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                    <h1 className="display-5 fw-bold text-body-emphasis">Centered hero</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
                            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Secondary</button>
                        </div>
                    </div>
                </div>

                <div className="b-example-divider"></div>

                <div className="px-4 pt-5 my-5 text-center border-bottom">
                    <h1 className="display-4 fw-bold text-body-emphasis">Centered screenshot</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                            <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3">Primary button</button>
                            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Secondary</button>
                        </div>
                    </div>
                    <div className="overflow-hidden" style={{ maxHeight: '30vh' }}>
                        <div className="container px-5">
                            <img src="bootstrap-docs.png" className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy" />
                        </div>
                    </div>
                </div>

                <div className="b-example-divider"></div>

                <div className="container col-xxl-8 px-4 py-5">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <div className="col-10 col-sm-8 col-lg-6">
                            <img src="bootstrap-themes.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                        </div>
                        <div className="col-lg-6">
                            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Responsive left-aligned hero with image</h1>
                            <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
                                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="b-example-divider"></div>

                <div className="container col-xl-10 col-xxl-8 px-4 py-5">
                    <div className="row align-items-center g-lg-5 py-5">
                        <div className="col-lg-7 text-center text-lg-start">
                            <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">Vertically centered hero sign-up form</h1>
                            <p className="col-lg-10 fs-4">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
                        </div>
                        <div className="col-md-10 mx-auto col-lg-5">
                            <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
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
                                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
                                <hr className="my-4" />
                                <small className="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="b-example-divider"></div>

                <div className="container my-5">
                    <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Border hero with cropped image and shadows</h1>
                            <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Primary</button>
                                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
                            </div>
                        </div>
                        <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                            <img className="rounded-lg-3" src="bootstrap-docs.png" alt="" width="720" />
                        </div>
                    </div>
                </div>

                <div className="b-example-divider"></div>

                <div className="bg-dark text-secondary px-4 py-5 text-center">
                    <div className="py-5">
                        <h1 className="display-5 fw-bold text-white">Dark color hero</h1>
                        <div className="col-lg-6 mx-auto">
                            <p className="fs-5 mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                                <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Custom button</button>
                                <button type="button" className="btn btn-outline-light btn-lg px-4">Secondary</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="b-example-divider mb-0"></div>
            </main>

        </>
    )
};

export default Home;