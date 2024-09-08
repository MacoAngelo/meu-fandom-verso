import { useState } from "react";
import "./App.css";
import FiltroLateral from "./componentes/FiltroLateral";
import BarraPesquisa from "./componentes/BarraPesquisa";
import Obra from "./componentes/Obra";
import dados from "./dados.js";

function App() {
  const [valorPesquisa, setValorPesquisa] = useState("");
  const [categoriaFiltro, setCategoriaFiltro] = useState("");
  const [obrasFiltradas, setObrasFiltradas] = useState(dados);

  const handlePesquisaChange = (novoValor) => {
    setValorPesquisa(novoValor);
    filtrarObras(novoValor, categoriaFiltro);
  };

  const handleCategoriaChange = (categoria) => {
    setCategoriaFiltro(categoria);
    filtrarObras(valorPesquisa, categoria);
  };

  const filtrarObras = (pesquisa, categoria) => {
    const novasObras = dados.filter((obra) => {
      const correspondePesquisa = obra.titulo
        .toLowerCase()
        .includes(pesquisa.toLowerCase());

      let correspondeCategoria = false;
      if (categoria === "me") {
        correspondeCategoria = obra.minhaLista;
      } else {
        if (!categoria) {
          correspondeCategoria = true;
        } else {
          if (
            obra.tipo === "filme" ||
            obra.tipo === "serie" ||
            obra.tipo === "anime"
          ) {
            correspondeCategoria = categoria === "visual";
          } else if (obra.tipo === "livro" || obra.tipo === "manga") {
            correspondeCategoria = categoria === "escrito";
          }
        }
      }

      return correspondePesquisa && correspondeCategoria;
    });
    setObrasFiltradas(novasObras);
  };

  return (
    <>
      <FiltroLateral onCategoriaChange={handleCategoriaChange} />
      <div className="container-conteudo">
        <BarraPesquisa valor={valorPesquisa} onChange={handlePesquisaChange} />
        <div className="container-conteudo__obras">
          {obrasFiltradas.map((obra) => (
            <Obra
              key={obra.id}
              obra={obra}
              trazerDados={categoriaFiltro === "me"}
            />
          ))}
        </div>
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
