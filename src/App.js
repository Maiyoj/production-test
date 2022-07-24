
import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';

function App() {
  return (
    <div>
           <Navbar />
      <Routes>
   
      <Route exact  path="/" element={ <Home/> } />
      <Route  exact path="/about" element={ <About /> } />
      <Route exact  path="/contact" element={ <Contact /> } />


    </Routes>
   
  </div>
  );
}

export default App;
