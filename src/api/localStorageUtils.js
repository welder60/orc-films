// Função para registrar um novo usuário
export const registrarUsuario = (nome, email, senha) => {
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};

  if (usuarios[email]) {
    return { sucesso: false, mensagem: "Usuário já existe!" };
  }

  usuarios[email] = { nome,email,senha, favoritos: [] }; // Inicializa o usuário com favoritos vazio
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  return { sucesso: true, mensagem: "Usuário registrado com sucesso!" };
};

// Função para validar login
export const validarUsuario = (email, senha) => {
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};

  if (!usuarios[email]) {
    return { sucesso: false, mensagem: "Usuário não encontrado!" };
  }

  if (usuarios[email].senha !== senha) {
    return { sucesso: false, mensagem: "Senha incorreta!" };
  }

  return { sucesso: true, mensagem: "Login bem-sucedido!" };
};

export const salvarFilmeFavorito = (email, filme) => {
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};

  if (!usuarios[email]) {
    return { sucesso: false, mensagem: "Usuário não encontrado!" };
  }

  const favoritos = usuarios[email].favoritos || [];
  const filmeJaAdicionado = favoritos.some((f) => f.id === filme.id);

  if (filmeJaAdicionado) {
    return { sucesso: false, mensagem: "Filme já está nos favoritos!" };
  }

  favoritos.push({
    id: filme.id,
    title: filme.title,
    poster_path: filme.poster_path,
    release_date: filme.release_date,
  }); // Salva apenas as informações necessárias do filme
  usuarios[email].favoritos = favoritos;
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  return { sucesso: true, mensagem: "Filme adicionado aos favoritos!" };
};

// Função para obter filmes favoritos de um usuário
export const obterFavoritos = (email) => {
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};
  if (!usuarios[email]) {
    return [];
  }
  return usuarios[email].favoritos || [];
};


export const removerFilmeFavorito = (email, filme) => {
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};

  if (!usuarios[email]) {
    return { sucesso: false, mensagem: "Usuário não encontrado!" };
  }

  const favoritos = usuarios[email].favoritos || [];
  const novosFavoritos = favoritos.filter((f) => f.id !== filme.id);

  usuarios[email].favoritos = novosFavoritos;
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  return { sucesso: true, mensagem: "Filme removido dos favoritos!" };
};
