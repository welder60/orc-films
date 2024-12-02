import React, { useState } from "react";
import "./Login.css"; // Arquivo de estilos
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState(""); // Estado para mensagens de feedback
  const navigate = useNavigate();

  const autenticarUsuario = (email, senha) => {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};
    const usuario = usuarios[email];

    if (usuario && usuario.senha === senha) {
      return { email, ...usuario }; // Retorna o objeto com o email incluído
    }

    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const autenticacao = autenticarUsuario(email, senha);

    if (autenticacao) {
      localStorage.setItem("logado", "true");
      localStorage.setItem("usuario", JSON.stringify(autenticacao)); // Salva o objeto completo
      setMensagem("Login bem-sucedido!");
      navigate("/?categoria=favoritos"); // Redireciona para a página inicial
	  window.location.reload(); // Recarrega a página
    } else {
      setMensagem("Email ou senha inválidos."); // Exibe mensagem de erro
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
        {mensagem && <p className="mensagem-feedback">{mensagem}</p>} {/* Exibe mensagem */}
      </form>
    </div>
  );
}

export default Login;
