import Navbar from "./components/navbar/Navbar";
import Astros from "./components/astros/Astros.jsx";
import Apod from "./components/apod/Apod.jsx";
import AboutMePage from "./components/AboutMe.jsx";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  const links = [
    { id: 1, href: "/", text: "Home" },
    { id: 3, href: "/about", text: "About me" },
    { id: 4, href: "/astros", text: "Astros" },
    { id: 5, href: "/apod", text: "APOD" },
  ];

  return (
    <>
      <Navbar links={links} />
      <Routes>
        <Route path="/" element={<h1>Welcome to Space App</h1>} />
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/astros" element={<Astros />} />
        <Route path="/Apod" element={<Apod />} />
      </Routes>
    </>
  );
}

export default App;
