import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import "./Perfil.css"; 

function Perfil() {
  const [usuario, setUsuario] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    const usuarioLogado = localStorage.getItem("usuario");
    
    if (usuarioLogado) {
      setUsuario(JSON.parse(usuarioLogado));
    } else {
      navigate("/entrar");
    }
  }, [navigate]);

  if (!usuario) {
    return null;
  }

  return (
    //logica de sair da conta não implementada e tem problema na hora de pegar o email.
    <div className="perfil">
      <h1>Bem-vindo, {usuario.email}!</h1>
      <p>Email: {usuario.email}</p>
      <p>Senha: {usuario.senha}</p>
      <button>SAIR</button> 
    </div>
  );
}

export default Perfil;
