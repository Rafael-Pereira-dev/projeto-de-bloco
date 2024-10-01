import React, { useState, useEffect } from "react";
import shrekImagem from "./assets/shrek.jpg";
import "./App.css";

const filmeMockado = {
  id: 1,
  title: "Shrek",
  release_date: "22-06-2001",
  poster_path: shrekImagem,
};

function App() {
  const [tema, setTema] = useState("light");
  const [pesquisa, setPesquisa] = useState("");
  const [filmes, setFilmes] = useState([filmeMockado]);

  useEffect(() => {
    const temaSalvo = localStorage.getItem("tema") || "light";
    setTema(temaSalvo);
    document.documentElement.setAttribute("data-theme", temaSalvo);
  }, []);

  const alternarTema = () => {
    const novoTema = tema === "light" ? "dark" : "light";
    setTema(novoTema);
    localStorage.setItem("tema", novoTema);
    document.documentElement.setAttribute("data-theme", novoTema);
  };

  const buscarFilmes = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="app">
      <header className="header">
        <h1>FLIX</h1>
        <form onSubmit={buscarFilmes} className="pesquisa-form">
          <input
            type="text"
            placeholder="Procure um filme..."
            value={pesquisa}
            onChange={(e) => setPesquisa(e.target.value)}
          />
          <button type="submit">Buscar</button>
        </form>
        <button onClick={alternarTema} className="tema-toggle">
          Alternar para {tema === "light" ? "Escuro" : "Claro"}
        </button>
      </header>

      <div className="filmes-grid">
        {filmes.length > 0 ? (
          filmes.map((filme) => (
            <div key={filme.id} className="filme-card">
              <img src={shrekImagem} alt={filme.title} />
              <h3>{filme.title}</h3>
              <p>{filme.release_date}</p>
            </div>
          ))
        ) : (
          <p>Nenhum filme encontrado</p>
        )}
      </div>
    </div>
  );
}

export default App;
