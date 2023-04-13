import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import HomePage from './components/pages/home/HomePage.js';
import NavBar  from './components/NavBar.js';

function App() {
  return (

      <div className="App">
        <NavBar />
        <HomePage />

      </div>

  );
}

export default App;

