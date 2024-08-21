import React from "react";
import "../styles/home.css";
import homeImage from "../assets/IMG_6346-removebg-preview.png"; // Importa a imagem

function Home() {
  return (
    <div className="home">
      <div className="home-text">
        <h1>
          Otimizamos a sua agenda de pacientes através de estratégias de
          marketing
        </h1>
      </div>
      <div className="home-image">
        <img src={homeImage} alt="Marketing Strategies" />
      </div>
    </div>
  );
}

export default Home;
