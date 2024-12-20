import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "../assets/logo.webp"; // Caminho para o logo

function Header() {
  const [logado, setLogado] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const logadoSistema = localStorage.getItem("logado") === "true";
    setLogado(logadoSistema);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("logado");
    setLogado(false);
    navigate("/");
  };

  return (
    <header className="header">
      <Link to="/" className="logo-container"> {/* Torna a logo um link para a página inicial */}
        <img src={logo} alt="Logo Orc Films" className="logo-imagem" />
        <h1 className="logo-texto">
          Orc'<p /><span className="logo-texto-verde">Films</span>
        </h1>
      </Link>
      <nav className="navegacao">
        <Link to="/?categoria=favoritos">Favoritos</Link>
        <Link to="/?categoria=em-cartaz">Em cartaz</Link>
        <Link to="/?categoria=maior-nota">Maior nota</Link>
        <Link to="/?categoria=populares">Populares</Link>
        <Link to="/?categoria=em-breve">Em breve</Link>

        {!logado && (
          <>
			<Link to="/entrar">Entrar</Link>
            <Link to="/cadastrar" className="botao-conta">
              Criar conta
            </Link>            
          </>
        )}

        {logado && (
          <>
            <Link to="/perfil" className="icone-perfil">
              <i className="fas fa-user">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="37"
                  height="37"
                  viewBox="0 0 37 37"
                  fill="none"
                >
                  <path
                    d="M30.8333 32.375V29.2917C30.8333 27.6562 30.1836 26.0877 29.0271 24.9312C27.8706 23.7747 26.3021 23.125 24.6666 23.125H12.3333C10.6978 23.125 9.12927 23.7747 7.9728 24.9312C6.81633 26.0877 6.16663 27.6562 6.16663 29.2917V32.375"
                    stroke="#45E32D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.5 16.9583C21.9058 16.9583 24.6667 14.1974 24.6667 10.7917C24.6667 7.38591 21.9058 4.625 18.5 4.625C15.0943 4.625 12.3334 7.38591 12.3334 10.7917C12.3334 14.1974 15.0943 16.9583 18.5 16.9583Z"
                    stroke="#45E32D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </i>
            </Link>
            <button className="botao-logout" onClick={handleLogout}>
              Sair
            </button>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
