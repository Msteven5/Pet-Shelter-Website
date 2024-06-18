import Auth from '../../utils/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './index.css'
import Logo from '/images/animal shelter logo.png'

const getUser = () => {
  if (Auth.loggedIn()) {
    const userName = Auth.getProfile().data.firstName
    return userName;
  }
}


const Nav = () => {

  const location = useLocation();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    Auth.logout();
  };

  const navigateToSignup = () => {
    navigate("/");
    setTimeout(() => {
      const signupSection = document.getElementById("signup");
      if (signupSection) {
        signupSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 1000);
  }
  
  const handleClick = (e) => {
    e.preventDefault();
    if (getUser()) {
      handleLogout();
    } else {
      navigateToSignup();
    }
  };


  return <>
    <ul className="nav justify-content-end align-items-center bg-dark" id="firstNav">
      <li className="nav-item mx-4">
        <a
          href='#'
          aria-current="page"
          className="text-decoration-none text-white"
          onClick={handleClick}
        >
          {getUser() ? "Logout" : "Sign-up"}
        </a>
      </li>
      <li className="nav-item mx-4">
        <Link aria-current="page" className="text-decoration-none text-white" to={Auth.loggedIn() ? '/profile' : '/login'}>{getUser() ? getUser() + "'s Profile" : "Profile"}</Link>
      </li>
      <li className="nav-item mx-4">
        <a aria-current="page" className="text-decoration-none text-white" href='#'>Need To Rehome A Pet?</a>
      </li>
      <li className="nav-item mx-4">
        <a aria-current="page" className="text-decoration-none text-white" href='#'>Pet Care Instructions</a>
      </li>
    </ul>

    <ul className={`nav nav-pills justify-content-around p-2 ${location.pathname !== '/' ? 'bg-white border-bottom border-black border-2' : ''}`}>
      <li className="nav-item">
        <Link to='/'><img className="d-block mx-auto" src={Logo} height="50px" /></Link>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle text-decoration-none text-black" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Available Animals</a>
        <ul className="dropdown-menu">
          <Link to='/pets'><li><a className="dropdown-item" href="#">All Available Animals</a></li></Link>
          <li><Link to='/pets/Dog' className="dropdown-item" href="#">Available Dogs/Puppies</Link></li>
          <li><Link to='/pets/Cat' className="dropdown-item" href="#">Available Cats/Kittens</Link></li>
          <li><Link to='/pets/Bird' className="dropdown-item" href="#">Available Birds</Link></li>
          <li><Link to='/pets/Farm-Animal' className="dropdown-item" href="#">Available Farm Animals</Link></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="#">Adoption Form</a></li>
        </ul>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle text-decoration-none text-black" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Pet Supplies</a>
        <ul className="dropdown-menu">
          <Link to='/shop'><li><a className="dropdown-item" href="#">All Pet Supplies</a></li></Link>
          <li><Link to='/shop/Food' className="dropdown-item" href="#">Pet Food</Link></li>
          <li><Link to='/shop/Treats' className="dropdown-item" href="#">Pet Treats</Link></li>
          <li><Link to='/shop/Beds' className="dropdown-item" href="#">Pet Beds</Link></li>
          <li><Link to='/shop/Toys' className="dropdown-item" href="#">Pet Toys</Link></li>
        </ul>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle text-decoration-none text-black" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Donate</a>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Donate Pet Food</a></li>
          <li><a className="dropdown-item" href="#">Donate Directly Via Stripe</a></li>
        </ul>
      </li>
      <li className="nav-item">
        <a className="nav-link text-decoration-none text-black" aria-current="page" href="#">Volunteer</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle text-decoration-none text-black" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">About Us</a>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Contact Us</a></li>
          <li><a className="dropdown-item" href="#">Learn about our Animal Policies</a></li>
        </ul>
      </li>
    </ul>
  </>
}

export default Nav;
