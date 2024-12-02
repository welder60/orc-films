import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import "./Perfil.css"; 

function Perfil() {
  const [usuario, setUsuario] = useState(null);
  const [novaSenha, setNovaSenha] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const usuarioLogado = localStorage.getItem("usuario");

    if (usuarioLogado) {
      setUsuario(JSON.parse(usuarioLogado));
    } else {
      navigate("/entrar"); // Redireciona para login se não estiver logado
    }
  }, [navigate]);

  const handleSair = () => {
    localStorage.removeItem("usuario");
    localStorage.removeItem("logado");
    navigate("/");
  };

  const handleMudarSenha = () => {
    if (novaSenha.trim() === "") {
      alert("A nova senha não pode estar vazia.");
      return;
    }

    if (novaSenha.length < 6) {
      alert("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};
    if (usuarios[usuario.email]) {
      usuarios[usuario.email].senha = novaSenha; // Atualiza a senha no LocalStorage
      localStorage.setItem("usuarios", JSON.stringify(usuarios));

      // Atualiza o usuário logado
      setUsuario({ ...usuario, senha: novaSenha });
      setNovaSenha(""); // Limpa o campo de entrada
      alert("Senha alterada com sucesso!");
    } else {
      alert("Erro ao atualizar a senha.");
    }
  };

  const handleExcluirConta = () => {
    const confirmacao = window.confirm("Tem certeza que deseja excluir sua conta?");
    if (confirmacao) {
      const usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};
      delete usuarios[usuario.email]; // Remove o usuário do LocalStorage
      localStorage.setItem("usuarios", JSON.stringify(usuarios));

      // Remove os dados do usuário logado e redireciona
      localStorage.removeItem("usuario");
      localStorage.removeItem("logado");
      alert("Conta excluída com sucesso!");
      navigate("/");
    }
  };

  if (!usuario) {
    return null; // Evita renderização desnecessária
  }

  return (
    <div className="perfil">
      <h1>Bem-vindo, {usuario.email}!</h1>
      <p><strong>Email:</strong> {usuario.email}</p>

      <div className="acoes">
        <button onClick={handleSair}>Sair</button>
        
        <div className="mudar-senha">
          <label htmlFor="novaSenha">Nova Senha:</label>
          <input
            type="password"
            id="novaSenha"
            value={novaSenha}
            onChange={(e) => setNovaSenha(e.target.value)}
            placeholder="Digite sua nova senha"
          />
          <button onClick={handleMudarSenha}>Alterar Senha</button>
        </div>

        <button onClick={handleExcluirConta} className="excluir-conta">
          Excluir Conta
        </button>
      </div>
    </div>
  );
}

export default Perfil;
