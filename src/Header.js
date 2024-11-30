import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>Orc' Films</h1>
      </div>
      <nav className="navegacao">
        <Link to="/?categoria=favoritos">Favoritos</Link>
        <Link to="/?categoria=em-cartaz">Em cartaz</Link>
        <Link to="/?categoria=maior-nota">Maior nota</Link>
        <Link to="/?categoria=populares">Populares</Link>
        <Link to="/?categoria=em-breve">Em breve</Link>
      </nav>
      <div className="acoes">
        <Link to="/entrar">Entrar</Link>
        <Link to="/cadastrar" className="botao-conta">
          Criar conta
        </Link>
        <Link to="/perfil" className="icone-perfil">
          <i className="fas fa-user"></i>
        </Link>
      </div>
    </header>
  );
}

export default Header;
