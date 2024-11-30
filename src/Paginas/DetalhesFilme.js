import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { buscarDetalhesFilme } from "../api/api";
import { salvarFilmeFavorito } from "../api/localStorageUtils";
import "../Paginas/DetalhesFilme.css"; // Arquivo de estilos

function DetalhesFilme() {
  const { id } = useParams(); // Obtém o ID do filme da URL
  const [filme, definirFilme] = useState(null);
  const [elenco, definirElenco] = useState([]);

  useEffect(() => {
    const carregarDetalhes = async () => {
      try {
        const detalhes = await buscarDetalhesFilme(id);
        definirFilme(detalhes);

        // Verifica se há créditos e define o elenco
        if (detalhes.credits) {
          definirElenco(detalhes.credits.cast.slice(0, 5)); // Apenas os 5 primeiros atores
        }
      } catch (erro) {
        console.error("Erro ao carregar os detalhes do filme:", erro);
      }
    };

    carregarDetalhes();
  }, [id]);

  // Função para adicionar o filme aos favoritos
  const handleAdicionarFavorito = () => {
    const email = localStorage.getItem("usuarioLogado");
    if (!email) {
      alert("Você precisa estar logado para adicionar favoritos.");
      return;
    }

    const resultado = salvarFilmeFavorito(email, filme);
    alert(resultado.mensagem);
  };

  if (!filme) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="detalhes-filme">
      <h1>Detalhes</h1>
      <div className="conteudo-detalhes">
        {/* Poster e informações principais */}
        <div className="poster">
          <img
            src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
            alt={filme.title}
          />
        </div>
        <div className="informacoes">
          <h2>{filme.title}</h2>
          <p>
            <strong>Data de lançamento:</strong>{" "}
            {new Date(filme.release_date).toLocaleDateString()}
          </p>
          <p>
            <strong>Sinopse:</strong> {filme.overview}
          </p>
          <p>
            <strong>Nota:</strong> {filme.vote_average}
          </p>
          <button
            className="botao-favoritos"
            onClick={handleAdicionarFavorito}
          >
            Adicionar aos Favoritos
          </button>
        </div>
      </div>

      {/* Elenco */}
      <h3>Elenco</h3>
      <div className="elenco">
        {elenco.map((ator) => (
          <div className="ator" key={ator.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${ator.profile_path}`}
              alt={ator.name}
            />
            <p>{ator.name}</p>
            <p>{ator.character}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DetalhesFilme;
