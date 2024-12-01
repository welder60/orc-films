import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import PaginaInicial from "../Paginas/PaginaInicial";
import DetalhesFilme from "../Paginas/DetalhesFilme";
import Login from "../Paginas/Login";
import Registro from "../Paginas/Registro";
import Perfil from "../Paginas/Perfil"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/filme/:id" element={<DetalhesFilme />} />
        <Route path="/entrar" element={<Login />} /> 
		    <Route path="/cadastrar" element={<Registro />} /> 
        <Route path="/perfil" element={<Perfil />} /> 
      </Routes>
    </Router>
  );
}

export default App;


