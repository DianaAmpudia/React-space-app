import { useState, useEffect } from "react";
import Progress from '../Progress.jsx';
import "./Apod.css";

const Apod = () => {

  const [apod, setApod] = useState(null);

  useEffect(() => {
    const fetchAPOD = async () => {
      const API_KEY = // PERSONAL NASA API KEY
      const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

      const data = await fetch(API_URL);
      const response = await data.json();
      setApod(response);
    };

    fetchAPOD().catch((error) => console.error(error));
  }, []);
  
  return (
    <div className="APOD-main-container">
      {!apod ? (
        <Progress/>
      ) : (
        <div className="apod-container">
          <h2>Astronomy Picture of the Day</h2>
          <h3>{apod.title}</h3>
          <p>Date: {apod.date}</p>
          <div className="apod-content">
            <img src={apod.url} alt={apod.title} />
            <p className="apod-description">{apod.explanation}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Apod;

