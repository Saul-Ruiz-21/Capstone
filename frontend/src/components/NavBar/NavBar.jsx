import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import Buttons from "../Buttons/Buttons";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <nav>
        <a className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b>KChews</b>
          </Link>
        </a>
        <ul>          
          <li>
            <button onClick={() => navigate("/")}>Home</button>
          </li>
          <li>
            {user ? (
              <button onClick={logoutUser}>Logout</button>
            ) : (
              <button onClick={() => navigate("/login")}>Login</button>
            )}
          </li>          
          <li>
            <button onClick={() => navigate("/cart")}> Cart </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
