import 'bootswatch/dist/journal/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
// import 'bootstrap/dist/js/bootstrap.js';
// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Navbar from './components/NavBar';
import Routes from "./components/Routes";
import { useEffect, useState } from 'react';
import ShareBnBApi from './api';
import jwt from "jsonwebtoken";
import UserContext from './userContext';
import { useHistory } from 'react-router-dom';
import Loading from './components/Loading';

/** ShareBnB App
 * 
 *  State:
 *      - isAuthenticating
 *      - currentUser
 *      - token
 * 
 *  Context:
 *      - UserContext { currentUser, setCurrentUser }
 *  
 *  App -> { Navbar, Routes }
 */
function App() {
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [currentUser, setCurrentUser] = useState({});
  const [token, setToken] = useState("");

  const history = useHistory();

  // if token in local storage, logs in
  useEffect(function checkForToken() {
    async function _checkForToken() {
      const token = localStorage.getItem("token");
      if (token) {
        setToken(token);
      } else {
        setIsAuthenticating(false);
      }
    }

    _checkForToken();
  }, []);

  // sets token in JoblyApi, gets and sets current user
  useEffect(
    function storeTokenAndSetUser() {
      async function _storeTokenAndSetUser() {
        try {
          ShareBnBApi.token = token;
          const { username } = jwt.decode(token);
          const user = await ShareBnBApi.getUser(username);
          setCurrentUser(user);
        } catch {
          console.error("INVALID TOKEN RECEIVED.");
          logout();
        } finally {
          setIsAuthenticating(false);
        }
      }

      if (token) _storeTokenAndSetUser();
    },
    [token]
  );

  // signUp: registers user with API and logs in
  async function signUp(newUser) {
    const token = await ShareBnBApi.signUp(newUser);
    setToken(token);
    localStorage.setItem("token", token);
    history.push("/");
  }

  // login: authenticates user with API and logs in
  async function login({ username, password } ) {
    const token = await ShareBnBApi.login(username, password);
    setToken(token);
    localStorage.setItem("token", token);
    history.push("/");
  }

  // logout: clears localStorage token, ShareBnBApi token, and current user state
  function logout() {
    setToken("");
    ShareBnBApi.token = "";
    localStorage.removeItem("token");
    setCurrentUser({});
  }

  // sendMessage: send message to specified user
  async function sendMessage(message, toUserId) {
    const msg = await ShareBnBApi.send(toUserId, message);
    return msg;
  }

  return (
    <div className='ShareBnBApp'>
      <UserContext.Provider value = {{ currentUser, setCurrentUser }}>
        <Navbar logout={logout} />
        {isAuthenticating ? <Loading /> : <Routes login={login} signUp={signUp} sendMessage={sendMessage} />}
      </UserContext.Provider>
    </div>
  );
}

export default App;
