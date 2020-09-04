import React from "react";
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
      <nav className="navbar bg-dark">
        <h1>
          <a href="index.html">
            <i className="fas fa-heart"></i>{' '}FoodShala
          </a>
        </h1>
        <ul>
          <li>
            <Link to="/restaurants">Restaurants</Link>
          </li>
          <li>
            <a href="register.html">Register</a>
          </li>
          <li>
            <a href="login.html">Login</a>
          </li>
        </ul>
      </nav>
  );
};

export default Navbar;
