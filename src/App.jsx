// import Navbar from "./components/navbar/Navbar";
import ResponsiveAppBar from "./components/appBar/Appbar.jsx"
import Astros from "./components/astros/Astros.jsx";
import Apod from "./components/apod/Apod.jsx";
import AboutMePage from "./components/AboutMe.jsx";
import {  Route, Routes } from 'react-router-dom';
import "./App.css";



function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<h1>Welcome to Space App</h1>} />
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/astros" element={<Astros />} />
        <Route path="/apod" element={<Apod />} />
      </Routes>
      </div>
  );
}

export default App;