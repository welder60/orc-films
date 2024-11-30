import React, { useState } from "react";
import "./Login.css"; // Arquivo de estilos

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Senha:", senha);
    // Aqui você pode adicionar a lógica para autenticação
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
