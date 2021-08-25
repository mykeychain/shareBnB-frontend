import 'bootswatch/dist/cyborg/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.js';
// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Navbar from './components/Navbar';
import Routes from "./components/Routes";

function App() {
  return (
    <div className='ShareBnBApp'>
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
