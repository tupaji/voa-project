import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/logo.png";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=tickets">
            <h6>Tickets</h6>
          </Link>
          <Link className="link" to="/?cat=attrs">
            <h6>Attractions</h6>
          </Link>
          <Link className="link" to="/?cat=shows">
            <h6>Shows</h6>
          </Link>
          <Link className="link" to="/?cat=store">
            <h6>Store</h6>
          </Link>
          <Link className="link" to="/?cat=parking">
            <h6>Parking</h6>
          </Link>
          <span>{currentUser?.lname}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          <span className="account">
            <Link className="link" to="/account">
              Account
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
