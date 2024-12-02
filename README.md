### **Orc Films**

Bem-vindo ao **Orc Films**, um projeto React que consome a API do TMDb para listar filmes populares, em cartaz, com maior nota, em breve e favoritos. Este projeto inclui funcionalidades de registro, login e gerenciamento de favoritos. A interface é estilizada e responsiva.

---

### **Tecnologias Utilizadas**

- **React**: Biblioteca JavaScript para construção da interface.
- **Axios**: Para chamadas HTTP.
- **React Router DOM**: Para navegação entre páginas.
- **CSS**: Estilização personalizada para componentes e páginas.
- **TMDb API**: Fonte de dados para os filmes.

---

### **Estrutura do Projeto**

#### **Raiz do Projeto**
| Nome                 | Descrição                                    |
|----------------------|--------------------------------------------|
| `api/`              | Contém arquivos para comunicação com a API e gerenciamento do LocalStorage. |
| `Componentes/`      | Componentes reutilizáveis como cabeçalho e cards.          |
| `Paginas/`          | Contém páginas do aplicativo (Registro, Login, Perfil, etc.). |
| `index.css`         | Estilo global da aplicação.                   |
| `index.js`          | Ponto de entrada da aplicação React.           |
| `logo.svg`          | Logotipo do projeto.                          |
| `reportWebVitals.js`| Utilitário para medir desempenho.              |

#### **Diretório `api/`**
| Nome                  | Descrição                                  |
|-----------------------|------------------------------------------|
| `api.js`             | Configuração do Axios e funções para chamadas à API do TMDb. |
| `localStorageUtils.js`| Funções para gerenciamento de dados no LocalStorage. |

#### **Diretório `Componentes/`**
| Nome                 | Descrição                                   |
|----------------------|-------------------------------------------|
| `App.css`           | Estilos principais da aplicação.            |
| `App.js`            | Estrutura principal com rotas e navegação. |
| `Cards.css`         | Estilização para exibição dos filmes.       |
| `Cards.js`          | Componente para renderizar cards de filmes. |
| `Header.css`        | Estilização do cabeçalho.                   |
| `Header.js`         | Componente de navegação da aplicação.       |

#### **Diretório `Paginas/`**
| Nome                 | Descrição                                   |
|----------------------|-------------------------------------------|
| `DetalhesFilme.css` | Estilização da página de detalhes do filme. |
| `DetalhesFilme.js`  | Página com informações detalhadas de um filme. |
| `Login.css`         | Estilização da página de login.             |
| `Login.js`          | Página de autenticação do usuário.          |
| `PaginaInicial.css` | Estilização da página inicial.              |
| `PaginaInicial.js`  | Página inicial com listagem de filmes por categoria. |
| `Perfil.css`        | Estilização da página de perfil.            |
| `Perfil.js`         | Página de gerenciamento de conta e favoritos. |
| `Registro.css`      | Estilização da página de registro.          |
| `Registro.js`       | Página de cadastro de usuários.             |

---

### **Principais Funcionalidades**

1. **Registro e Login**:
   - Usuários podem criar contas e fazer login para acessar recursos exclusivos.

2. **Favoritos**:
   - Filmes podem ser adicionados ou removidos da lista de favoritos. Os dados são salvos no LocalStorage.

3. **Ordenação e Busca**:
   - Resultados podem ser ordenados por nome ou data de lançamento.
   - Busca por filmes pelo nome.

4. **Detalhes do Filme**:
   - Exibição de informações detalhadas como elenco, sinopse e nota.

5. **Responsividade**:
   - A interface adapta-se a diferentes tamanhos de tela.

---

### **Como Executar o Projeto**

1. Clone o repositório:
   ```bash
   git clone https://github.com/welder60/orc-films.git
   cd orc-films
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Crie um arquivo `.env` na raiz com a chave da API do TMDb:
   ```
   REACT_APP_API_KEY=SUA_API_KEY_AQUI
   ```

4. Execute o projeto:
   ```bash
   npm start
   ```

5. Acesse no navegador:
   ```
   http://localhost:3000
   ```

---

### **Acesse o Projeto Online**

O projeto está hospedado no Vercel:
[Orc Films - Demo Online](https://orc-films.vercel.app/)

---

### **Contribuições**

Contribuições são bem-vindas! Siga os passos abaixo para enviar melhorias:

1. Faça um fork do repositório.
2. Crie um branch para sua funcionalidade:
   ```bash
   git checkout -b minha-funcionalidade
   ```
3. Commit suas mudanças:
   ```bash
   git commit -m "Adicionei uma nova funcionalidade"
   ```
4. Faça um push para o branch:
   ```bash
   git push origin minha-funcionalidade
   ```
5. Abra um Pull Request.

---