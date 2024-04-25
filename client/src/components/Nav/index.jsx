import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';
import './index.css'

function Nav() {
  return <>
    <ul className="nav justify-content-end align-items-center bg-dark" id="firstNav">
      <li className="nav-item mx-4">
        <a aria-current="page" className="text-decoration-none text-white" href='#'>Need To Rehome A Pet?</a>
      </li>
      <li className="nav-item mx-4">
        <a aria-current="page" className="text-decoration-none text-white" href='#'>Pet Care Instructions</a>
      </li>
    </ul>

    <ul className="nav nav-pills justify-content-around bg-secondary p-2">
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle text-decoration-none text-white" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Available Animals</a>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Available Dogs/Puppies</a></li>
          <li><a className="dropdown-item" href="#">Available Cats/Kittens</a></li>
          <li><a className="dropdown-item" href="#">Available Birds</a></li>
          <li><a className="dropdown-item" href="#">Available Farm Animals</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="#">Adoption Form</a></li>
        </ul>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle text-decoration-none text-white" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Pet Supplies</a>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Pet Food & Treats</a></li>
          <li><a className="dropdown-item" href="#">Pet Toys & Beds</a></li>
        </ul>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle text-decoration-none text-white" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Donate</a>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Donate Pet Food</a></li>
          <li><a className="dropdown-item" href="#">Donate Directly Via Stripe</a></li>
        </ul>
      </li>
      <li className="nav-item">
        <a className="nav-link text-decoration-none text-white" aria-current="page" href="#">Volunteer</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle text-decoration-none text-white" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">About Us</a>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Contact Us</a></li>
          <li><a className="dropdown-item" href="#">Learn about our Animal Policies</a></li>
        </ul>
      </li>
    </ul>
  </>
}

export default Nav;