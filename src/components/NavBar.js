import { NavLink } from "react-router-dom";
import "./Navbar.css"
import UserContext from "../userContext";
import React, { useContext } from "react";


/** Renders a Navigation bar that persists whether logged in or not.
 *
 *  If a user is logged in, shows Companies, Jobs, Profile, and Logout links.
 *  If not, shows option to login or register.
 * 
 *  Props:
 *      - logout
 * 
 *  Context:
 *      - UserContext
 *  
 *  App -> Navbar
 */
export default function Navbar({ logout }) {
  const { currentUser } = useContext(UserContext);

  if (currentUser.username) {
    return (
        <nav className="Navbar navbar navbar-dark bg-primary d-flex sticky-top mb-4">
          <div className="me-auto ps-4 navbar-brand"><NavLink exact to='/'><i className="bi bi-house-fill"></i> ShareBnB</NavLink></div>
          <div><NavLink exact to='/listings'>Listings</NavLink></div>
          <div><NavLink exact to='/listings/add'>Add Listing</NavLink></div>
          <div><NavLink exact to='/messages'>Messages</NavLink></div>
          <div className="pe-3"><NavLink exact to='/logout'onClick={logout}>Logout</NavLink></div>
        </nav>
      );
  } 
  
  return (
        <nav className="Navbar navbar navbar-dark bg-primary d-flex sticky-top mb-4">
          <div className="me-auto ps-4 navbar-brand"><NavLink exact to='/'><i className="bi bi-house-fill"></i> ShareBnB</NavLink></div>
          <div><NavLink exact to='/listings'>Listings</NavLink></div>
          <div><NavLink exact to='/signup'>Signup</NavLink></div>
          <div className="pe-3"><NavLink exact to='/login'>Login</NavLink></div>
        </nav>
    )   
}