import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './styles/theme.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

