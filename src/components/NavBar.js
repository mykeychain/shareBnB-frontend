import { NavLink } from "react-router-dom";
import "./Navbar.css"
// import UserContext from "./userContext";
import React from "react";


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
export default function Navbar() {
//   const { currentUser } = useContext(UserContext);

//   if (currentUser) {
//     return (
//         <nav className="Navbar navbar navbar-dark bg-primary d-flex bd-highlight sticky-top mb-4">
//           <div className="me-auto pl-0 bd-highlight navbar-brand"><NavLink exact to='/'>ShareBnB</NavLink></div>
//           <div className="bd-highlight"><NavLink exact to='/listings'>Listings</NavLink></div>
//           <div className="bd-highlight"><NavLink exact to='/jobs'>JOBS</NavLink></div>
//           <div className="bd-highlight"><NavLink exact to='/profile'>PROFILE</NavLink></div>
//           <div className="me-3 bd-highlight"><NavLink exact to='/logout'onClick={logout}>LOGOUT</NavLink></div>
//         </nav>
//       );
//   } 
  
  return (
        <nav className="Navbar navbar navbar-dark bg-primary d-flex mb-4">
          <div className="me-auto ps-2 navbar-brand"><NavLink exact to='/'><i className="bi bi-house-fill"></i> ShareBnB</NavLink></div>
          <div className="me-0"><NavLink exact to='/listings'>Listings</NavLink></div>
          {/* <div className="ps-0 me-2 bd-highlight"><NavLink exact to='/login'>Login</NavLink></div> */}
        </nav>
    )   
}