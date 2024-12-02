import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import "./Perfil.css"; 

function Perfil() {
  const [usuario, setUsuario] = useState(null);
  const [novaSenha, setNovaSenha] = useState("");
  const [novoNome, setNovoNome] = useState("");
  const [novoEmail, setNovoEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const usuarioLogado = localStorage.getItem("usuario");

    if (usuarioLogado) {
      setUsuario(JSON.parse(usuarioLogado));
    } else {
      navigate("/entrar"); // Redireciona para login se não estiver logado
    }
  }, [navigate]);

  // const handleSair = () => {
  //   localStorage.removeItem("usuario");
  //   localStorage.removeItem("logado");
  //   navigate("/");
  // };

  const handleMudarNome = () => {
    if (novoNome.trim() == ""){
      alert("É obrigatório ter um nome.");
      return;
    }

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};
    if (usuarios[usuario.email]) {
      usuarios[usuario.email].nome = novoNome; // Atualiza a senha no LocalStorage
      localStorage.setItem("usuarios", JSON.stringify(usuarios));

      // Atualiza o usuário logado
      setUsuario({ ...usuario, nome: novoNome });
      setNovoNome(""); // Limpa o campo de entrada
      alert("Nome alterado com sucesso!");
    } else {
      alert("Erro ao atualizar nome.");
    }

  }

  const handleMudarEmail = () => {
    if (novoEmail.trim() === "") {
      alert("É obrigatório preencher este campo para editar o email.");
      return;
    }
  
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};
  
    if (usuarios[usuario.email]) {
      const dadosUsuario = usuarios[usuario.email];
  
      usuarios[novoEmail] = { ...dadosUsuario, email: novoEmail };
      delete usuarios[usuario.email];
  
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
  
      const usuarioAtualizado = { ...usuario, email: novoEmail };
      setUsuario(usuarioAtualizado);
      localStorage.setItem("usuario", JSON.stringify(usuarioAtualizado));
  
      setNovoEmail("");
      alert("Email alterado com sucesso!");
    } else {
      alert("Erro ao atualizar email. Usuário não encontrado.");
    }
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
      <h1>Bem-vindo, {usuario.nome}!</h1>
      <div className="acoes">
        <div className="container-inputs">
          <label htmlFor="novoNome">Nome:</label>
          <input
            type="text"
            id="novoNome"
            value={novoNome}
            onChange={(e) => setNovoNome(e.target.value)}
            placeholder={usuario.nome}
          />
          <button onClick={handleMudarNome}>Alterar nome</button>
        </div>

        <div className="container-inputs">
          <label htmlFor="novoEmail">Email:</label>
          <input
            type="email"
            id="novoEmail"
            value={novoEmail}
            onChange={(e) => setNovoEmail(e.target.value)}
            placeholder={usuario.email}
          />
          <button onClick={handleMudarEmail}>Alterar email</button>
        </div>



        <div className="container-inputs">
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
