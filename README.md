# Orc Films 🎥

Orc Films é uma aplicação web desenvolvida em React que utiliza a API do [The Movie Database (TMDb)](https://www.themoviedb.org/) para exibir informações sobre filmes, como títulos em cartaz, populares, com maior nota e próximos lançamentos. Além disso, o projeto implementa funcionalidades como login, registro de usuários, e adição de filmes aos favoritos, tudo integrado ao **LocalStorage**.

Acesse a aplicação ao vivo: [Orc Films - Vercel](https://orc-films.vercel.app/)

---

## Índice

1. [Funcionalidades](#funcionalidades)
2. [Tecnologias Utilizadas](#tecnologias-utilizadas)
3. [Instalação e Configuração](#instalação-e-configuração)
4. [Estrutura do Projeto](#estrutura-do-projeto)
5. [Contribuindo](#contribuindo)
6. [Licença](#licença)

---

## Funcionalidades

- **Explorar filmes:**
  - Listar filmes em cartaz, populares, com maior nota e lançamentos futuros.
  - Detalhes completos de cada filme, incluindo sinopse, elenco e nota.

- **Sistema de usuários:**
  - Registro e login utilizando o **LocalStorage**.
  - Validação de credenciais no momento do login.

- **Favoritos:**
  - Adicionar filmes aos favoritos do usuário logado.
  - Listar e gerenciar os filmes favoritos para cada usuário.

---

## Tecnologias Utilizadas

- **Front-end:** React.js, React Router, CSS3.
- **Back-end (API):** [The Movie Database (TMDb)](https://www.themoviedb.org/documentation/api) para obter dados sobre filmes.
- **Armazenamento local:** LocalStorage para registro de usuários e favoritos.
- **Hospedagem:** Vercel ([Acesse aqui](https://orc-films.vercel.app/)).

---

## Instalação e Configuração

### **Pré-requisitos**

Certifique-se de ter o seguinte instalado em sua máquina:
- [Node.js](https://nodejs.org/) v16 ou superior.
- [Git](https://git-scm.com/).

### **Passos para Instalação**

1. Clone o repositório:
   ```bash
   git clone https://github.com/welder60/orc-films.git
   cd orc-films
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Crie um arquivo `.env` na raiz do projeto com a seguinte variável de ambiente:
   ```env
   REACT_APP_API_KEY=YOUR_TMDB_API_KEY
   ```

   Substitua `YOUR_TMDB_API_KEY` pela sua chave da API do TMDb.

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```

5. Acesse a aplicação no navegador em [http://localhost:3000](http://localhost:3000).

---

## Estrutura do Projeto

Aqui está a estrutura atual do diretório `src/`:

```
src/
├── api.js                 # Configuração do Axios para comunicação com a API TMDb
├── App.css                # Estilos globais da aplicação
├── App.js                 # Configuração principal do React Router
├── Cards.css              # Estilos dos componentes de cards de filmes
├── Cards.js               # Componente para exibir os filmes em formato de grid
├── DetalhesFilme.css      # Estilos da página de detalhes de um filme
├── DetalhesFilme.js       # Página de detalhes do filme com sinopse, elenco e botão de favoritos
├── Header.css             # Estilos do header da aplicação
├── Header.js              # Header com navegação para categorias e login
├── index.css              # Estilos básicos globais
├── index.js               # Ponto de entrada principal do React
├── localStorageUtils.js   # Funções utilitárias para manipulação de usuários e favoritos no LocalStorage
├── Login.css              # Estilos para a página de login
├── Login.js               # Página de login com validação
├── logo.svg               # Logotipo da aplicação
├── PaginaInicial.css      # Estilos para a página inicial
├── PaginaInicial.js       # Página inicial com listagem de filmes por categoria
├── Registro.css           # Estilos para a página de registro de usuário
├── Registro.js            # Página para registrar novos usuários
├── reportWebVitals.js     # Métricas de desempenho do React
```

---

## Contribuindo

Contribuições são sempre bem-vindas! Siga os passos abaixo para contribuir:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature:
   ```bash
   git checkout -b minha-feature
   ```
3. Commit suas alterações:
   ```bash
   git commit -m "Minha nova feature"
   ```
4. Envie para o repositório remoto:
   ```bash
   git push origin minha-feature
   ```
5. Abra um Pull Request no repositório principal.

---

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

### **Links Importantes**
- Repositório: [Orc Films no GitHub](https://github.com/welder60/orc-films)
- Aplicação ao vivo: [Orc Films na Vercel](https://orc-films.vercel.app/) 

