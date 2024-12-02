import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { buscarFilmesPorClassificacao } from "../api/api";
import Cards from "../Componentes/Cards";

function PaginaInicial() {
  const [filmes, definirFilmes] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [ordenacao, setOrdenacao] = useState(""); // Estado para a ordenação atual
  const location = useLocation();

  // Mapeamento de categorias amigáveis para a API
  const categoriaMap = {
    "populares": "popular",
    "em-cartaz": "now_playing",
    "maior-nota": "top_rated",
    "em-breve": "upcoming",
    "favoritos": "favorite",
  };

  // Extrai os parâmetros da URL
  const queryParams = new URLSearchParams(location.search);
  const categoriaURL = queryParams.get("categoria") || "populares";

  // Traduz a categoria amigável para a classificação da API
  const categoriaAPI = categoriaMap[categoriaURL] || "popular";

  const carregarFavoritos = () => {
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    definirFilmes(usuario?.favoritos || []);
  };

  useEffect(() => {
    const carregarFilmes = async () => {
      if (categoriaAPI === "favorite") {
        carregarFavoritos();
      } else {
        try {
          const dados = await buscarFilmesPorClassificacao(categoriaAPI);
          definirFilmes(dados);
        } catch (erro) {
          console.error(
            `Erro ao buscar filmes da categoria "${categoriaAPI}":`,
            erro
          );
        }
      }
    };

    carregarFilmes();

    if (categoriaAPI === "favorite") {
      const handleStorageChange = () => {
        carregarFavoritos();
      };

      window.addEventListener("storage", handleStorageChange);

      return () => {
        window.removeEventListener("storage", handleStorageChange);
      };
    }
  }, [categoriaAPI]);

  // Função para ordenar e filtrar os filmes
  const obterFilmesOrdenados = () => {
    let filmesFiltrados = filmes;

    // Aplicar filtro de busca
    if (filtro.trim() !== "") {
      filmesFiltrados = filmesFiltrados.filter((filme) =>
        filme.title.toLowerCase().includes(filtro.toLowerCase())
      );
    }

    // Aplicar ordenação
    if (ordenacao === "alfabetica") {
      filmesFiltrados.sort((a, b) => a.title.localeCompare(b.title));
    } else if (ordenacao === "data") {
      filmesFiltrados.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
    }

    return filmesFiltrados;
  };

  return (
    <div className="pagina-inicial">
      <h1>{categoriaURL.replace("-", " ").toUpperCase()}</h1>

      {/* Filtros e Ordenação */}
      <div className="opcoes">        
          <button
            onClick={() => setOrdenacao("alfabetica")}
            className={ordenacao === "alfabetica" ? "ativo" : ""}
          >
            Ordem Alfabética
          </button>
		  <input
          type="text"
          placeholder="Buscar por nome..."
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        />
          <button
            onClick={() => setOrdenacao("data")}
            className={ordenacao === "data" ? "ativo" : ""}
          >
            Data de Lançamento
          </button>
      </div>

      {/* Lista de Filmes */}
      {filmes.length > 0 ? (
        <Cards filmes={obterFilmesOrdenados()} />
      ) : (
        <p>Nenhum filme encontrado para esta categoria.</p>
      )}
    </div>
  );
}

export default PaginaInicial;
