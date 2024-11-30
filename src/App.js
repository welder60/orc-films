import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import PaginaInicial from "./PaginaInicial";
import DetalhesFilme from "./DetalhesFilme";
import Login from "./Login";
import Registro from "./Registro";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/filme/:id" element={<DetalhesFilme />} />
        <Route path="/entrar" element={<Login />} /> 
		<Route path="/cadastrar" element={<Registro />} /> 
      </Routes>
    </Router>
  );
}

export default App;


