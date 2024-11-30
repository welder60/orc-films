import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { buscarFilmesPorClassificacao } from "../api/api";
import Cards from "../Componentes/Cards";

function PaginaInicial() {
  const [filmes, definirFilmes] = useState([]);
  const location = useLocation();

  // Mapeamento de categorias amigáveis para a API
  const categoriaMap = {
    "populares": "popular",
    "em-cartaz": "now_playing",
    "maior-nota": "top_rated",
    "em-breve": "upcoming",
    "favoritos": "favorite", // Você pode ajustar ou implementar para favoritos locais
  };

  // Extrai os parâmetros da URL
  const queryParams = new URLSearchParams(location.search);
  const categoriaURL = queryParams.get("categoria") || "populares";

  // Traduz a categoria amigável para a classificação da API
  const categoriaAPI = categoriaMap[categoriaURL] || "popular";

  useEffect(() => {
    const carregarFilmes = async () => {
      try {
        const dados = await buscarFilmesPorClassificacao(categoriaAPI);
        definirFilmes(dados);
      } catch (erro) {
        console.error(
          `Erro ao buscar filmes da categoria "${categoriaAPI}":`,
          erro
        );
      }
    };

    carregarFilmes();
  }, [categoriaAPI]);

  return (
    <div className="cards">
      <h1>{categoriaURL.replace("-", " ").toUpperCase()}</h1>
      <Cards filmes={filmes} />
    </div>
  );
}

export default PaginaInicial;
