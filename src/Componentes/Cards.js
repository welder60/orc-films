import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css"; // Arquivo de estilos para os cards

function Cards({ filmes }) {
  return (
    <div className="grade-cards">
      {filmes.map((filme) => (
        <Link to={`/filme/${filme.id}`} key={filme.id} className="card-link">
          <div className="card">
            <img
              src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
              alt={filme.title}
            />
            <h3>{filme.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Cards;
