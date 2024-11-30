import axios from "axios";

// Cria a instância do Axios para comunicação com a API
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: process.env.REACT_APP_API_KEY, // Variável de ambiente para proteger a chave
    language: "pt-BR", // Define o idioma padrão
  },
});

// Função genérica para buscar filmes com base em uma classificação
export const buscarFilmesPorClassificacao = async (classificacao = "popular") => {
  const resposta = await api.get(`/movie/${classificacao}`);
  return resposta.data.results;
};

// Função para buscar os detalhes de um filme específico
export const buscarDetalhesFilme = async (idFilme) => {
  const resposta = await api.get(`/movie/${idFilme}`, {
    params: { append_to_response: "credits" }, // Inclui informações adicionais, como o elenco
  });
  return resposta.data;
};

export default api;
