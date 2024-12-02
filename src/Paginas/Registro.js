import React, { useState } from "react";
import { registrarUsuario } from "../api/localStorageUtils";
import "./Registro.css";

function Registro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [tipoMensagem, setTipoMensagem] = useState(""); // Sucesso ou erro

  const handleSubmit = (e) => {
    e.preventDefault();
    const resultado = registrarUsuario(nome,email, senha);
    setMensagem(resultado.mensagem);
    setTipoMensagem(resultado.sucesso ? "success" : "error");
  };

  return (
    <div className="pagina-registro">
      <h1 className="registro-titulo">Registrar</h1>
      <form onSubmit={handleSubmit} className="registro-form">
      <div className="registro-campo">
          <label htmlFor="email">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div className="registro-campo">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="registro-campo">
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="registro-botao">Registrar</button>
      </form>
      {mensagem && (
        <p className={`registro-mensagem ${tipoMensagem}`}>
          {mensagem}
        </p>
      )}
    </div>
  );
}

export default Registro;
