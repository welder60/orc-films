import React, { useState } from "react";
import "./Login.css"; // Arquivo de estilos
import { useNavigate } from "react-router-dom";

function Login() {
  const [logado, setLogado] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const autenticarUsuario = (email, senha) => {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};
    const usuario = usuarios[email];

    if (usuario && usuario.senha === senha) {
      return usuario;
    }

    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const autenticacao = autenticarUsuario(email, senha);
    
    if (autenticacao) {
      setLogado(true);
      localStorage.setItem("logado", "true");
      localStorage.setItem("usuario", JSON.stringify(autenticacao));
      console.log("Login bem-sucedido!");
      navigate("/");
      
    } else {
      console.log("Login mal-sucedido.");
    }
  };
  

  return (
    <div className="pagina-login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="form-login">
        <div className="campo">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="campo">
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="botao-login">
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;