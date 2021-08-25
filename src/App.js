import 'bootswatch/dist/litera/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.js';
// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import NavBar from './components/NavBar';
import Routes from "./components/Routes";

function App() {
  return (
    <div className='ShareBnBApp'>
      <NavBar />
      <Routes />
    </div>
  );
}

export default App;
