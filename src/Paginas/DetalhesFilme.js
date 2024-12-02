import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { buscarDetalhesFilme } from "../api/api";
import { salvarFilmeFavorito, removerFilmeFavorito } from "../api/localStorageUtils";
import "../Paginas/DetalhesFilme.css"; // Arquivo de estilos

function DetalhesFilme() {
  const { id } = useParams(); // Obtém o ID do filme da URL
  const [filme, definirFilme] = useState(null);
  const [elenco, definirElenco] = useState([]);
  const [erro, definirErro] = useState(null);
  const [favoritado, setFavoritado] = useState(false);

  useEffect(() => {
    const carregarDetalhes = async () => {
      try {
        const detalhes = await buscarDetalhesFilme(id);
        definirFilme(detalhes);

        // Verifica se há créditos e define o elenco
        if (detalhes.credits) {
          definirElenco(detalhes.credits.cast.slice(0, 5)); // Apenas os 5 primeiros atores
        }

        // Verifica se o filme já está nos favoritos
        const usuario = JSON.parse(localStorage.getItem("usuario"));
        if (usuario && usuario.favoritos) {
          const jaFavoritado = usuario.favoritos.some((f) => f.id === detalhes.id);
          setFavoritado(jaFavoritado);
        }
      } catch (erro) {
        definirErro("Não foi possível carregar os detalhes do filme.");
        console.error("Erro ao carregar os detalhes do filme:", erro);
      }
    };

    carregarDetalhes();
  }, [id]);

  // Função para adicionar o filme aos favoritos
  const handleAdicionarFavorito = () => {
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    if (!usuario || !usuario.email) {
      alert("Você precisa estar logado para adicionar favoritos.");
      return;
    }

    const resultado = salvarFilmeFavorito(usuario.email, filme);
    setFavoritado(true);
    alert(resultado.mensagem);
	window.location.reload(); // Recarrega a página
  };

  // Função para remover o filme dos favoritos
  const handleRemoverFavorito = () => {
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    if (!usuario || !usuario.email) {
      alert("Você precisa estar logado para remover favoritos.");
      return;
    }

    const resultado = removerFilmeFavorito(usuario.email, filme);
    setFavoritado(false);
    alert(resultado.mensagem);
	window.location.reload(); // Recarrega a página
  };

  if (erro) {
    return <div className="erro">{erro}</div>;
  }

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
            onError={(e) => (e.target.src = "/images/default-movie.jpg")} // Imagem genérica
          />
        </div>
        <div className="informacoes">
          <h2>{filme.title}</h2>
          <p>
            <strong>Data de lançamento:</strong>{" "}
            {filme.release_date
              ? new Date(filme.release_date).toLocaleDateString()
              : "Data não disponível"}
          </p>
          <p>
            <strong>Gêneros:</strong>{" "}
            {filme.genres && filme.genres.length > 0
              ? filme.genres.map((g) => g.name).join(", ")
              : "Gêneros não disponíveis"}
          </p>
          <p>
            <strong>Sinopse:</strong>{" "}
            {filme.overview || "Sinopse não disponível."}
          </p>
          <p>
            <strong>Nota:</strong> {filme.vote_average || "N/A"}
          </p>
          {favoritado ? (
            <button
              className="botao-favoritos removido"
              onClick={handleRemoverFavorito}
            >
              Remover dos Favoritos
            </button>
          ) : (
            <button
              className="botao-favoritos"
              onClick={handleAdicionarFavorito}
            >
              Adicionar aos Favoritos
            </button>
          )}
        </div>
      </div>

      {/* Elenco */}
      <h3>Elenco</h3>
      <div className="elenco">
        {elenco.length > 0 ? (
          elenco.map((ator) => (
            <div className="ator" key={ator.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${ator.profile_path}`}
                alt={ator.name}
                onError={(e) => (e.target.src = "/images/default-actor.jpg")} // Imagem genérica para atores
              />
              <p>{ator.name}</p>
              <p>{ator.character}</p>
            </div>
          ))
        ) : (
          <p>Elenco não disponível.</p>
        )}
      </div>
    </div>
  );
}

export default DetalhesFilme;
