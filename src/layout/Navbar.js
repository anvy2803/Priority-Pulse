import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import photo from "../img/Profile.png";

const Navbar = ({ title }) => {
  return (
    <nav className="navbar">
      <Fragment>
        <h1> {title} </h1>
      </Fragment>
      <div className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Active Rides</Link>
          </li>
          <li>
            <Link to="/">Profile</Link>
          </li>
          <li>
            <Link to="/">Logout</Link>
          </li>
        </ul>
        <Fragment>
          <img src={photo} alt={" "} />
        </Fragment>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Priority Pulse",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
