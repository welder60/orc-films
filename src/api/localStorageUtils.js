// Função para registrar um novo usuário
export const registrarUsuario = (email, senha) => {
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};

  if (usuarios[email]) {
    return { sucesso: false, mensagem: "Usuário já existe!" };
  }

  usuarios[email] = { senha, favoritos: [] }; // Adiciona o usuário com uma lista vazia de favoritos
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

// Função para salvar filmes favoritos
export const salvarFilmeFavorito = (email, filme) => {
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};

  if (!usuarios[email]) {
    return { sucesso: false, mensagem: "Usuário não encontrado!" };
  }

  const favoritos = usuarios[email].favoritos || [];
  const filmeJaAdicionado = favoritos.find((f) => f.id === filme.id);

  if (filmeJaAdicionado) {
    return { sucesso: false, mensagem: "Filme já está nos favoritos!" };
  }

  favoritos.push(filme); // Adiciona o filme aos favoritos
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
