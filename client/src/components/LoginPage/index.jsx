import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from "../../utils/auth";
import { LOGIN_USER } from '../../utils/mutations'; 
import { useNavigate } from "react-router-dom";
import './login.css'

const LoginPage = () => {
    const navigate = useNavigate();
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [loginUser, { error }] = useMutation(LOGIN_USER); 
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      try {
        const mutationResponse = await loginUser({
          variables: {
            email: formState.email,
            password: formState.password,
          },
        });
        console.log(mutationResponse.data);
    
        const token = mutationResponse.data.loginUser.token;
        Auth.login(token);
        setFormState({ email: '', password: '' });
        navigate("/profile");
      } catch (err) {
        console.error(err);
      }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
          ...formState,
          [name]: value,
        });
      };

    return (
        <>
            <main className="d-flex align-items-center justify-content-center pt-5 mt-5">
                <div className="form-signin w-100 m-auto mt-5 bg-white rounded-3">
                    <form onSubmit={handleFormSubmit}>
                        <div className="d-flex align-items-center justify-content-center">
                            <img className="mb-4" src="./images/animal shelter logo.png" alt="" width="125" height="100" />
                        </div>
                            <h2 className="text-center">Welcome Back!</h2>
                            <h3 className="mb-3 text-center">Sign In Here</h3>

                        <div className="form-floating">
                            <input type="email" name="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={handleChange} required />
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating mb-4">
                            <input type="password" name="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={handleChange} required />
                            <label for="floatingPassword">Password</label>
                        </div>
                        <button className="w-100 btn darkBackground text-white btn-primary" type="submit">Sign in</button>
                    </form>
                </div>
            </main>
        </>
    )
};

export default LoginPage;