import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <div className="container">
        <div className="row gy-3">
          
          {/* Brand */}
          <div className="col-12 col-md-4">
            <h6 className="text-info fw-bold mb-2">Michael's Animal Rescue</h6>
            <p className="text-light fs-6 mb-0">
              Dedicated to the wellbeing of all animals—nurturing young animals and comforting seniors.
            </p>
          </div>

          {/* Explore */}
          <div className="col-6 col-md-2">
            <h6 className="text-uppercase text-light fs-5 fw-bold mb-2">Explore</h6>
            <ul className="list-unstyled fs-6 mb-0">
              <li className="mb-1"><Link to="/pets" className="text-light text-decoration-none">Available Pets</Link></li>
              <li className="mb-1"><Link to="/farm" className="text-light text-decoration-none">Farm Animals</Link></li>
              <li className="mb-1"><Link to="/shop" className="text-light text-decoration-none">Pet Supplies</Link></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div className="col-6 col-md-2">
            <h6 className="text-uppercase text-light fs-5 fw-bold mb-2">Get Involved</h6>
            <ul className="list-unstyled fs-6 mb-0">
              <li className="mb-1"><Link to="/about" className="text-light text-decoration-none">About Us</Link></li>
              <li className="mb-1"><Link to="/volunteer" className="text-light text-decoration-none">Volunteer</Link></li>
              <li className="mb-1"><Link to="/donate" className="text-light text-decoration-none">Donate</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-12 col-md-4">
            <h6 className="text-uppercase text-light fs-5 fw-bold mb-2">Contact Us</h6>
            <p className="text-light fs-6 mb-1"><strong>Email:</strong> support@michaelsanimalrescue.org</p>
            <p className="text-light fs-6 mb-0"><strong>Location:</strong> Georgetown, TX</p>
          </div>

        </div>

        <hr className="my-3 border-light" />

        <div className="text-center fs-6 text-light">
          &copy; {new Date().getFullYear()} Michael's Animal Rescue Agency. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;