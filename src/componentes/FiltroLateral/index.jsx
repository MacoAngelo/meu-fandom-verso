import imgAstronauta from "../../../public/astronauta_gerado_ia.svg";
import imgUser from "./assets/user-astronaut-solid.svg";
import imgMovies from "./assets/film-solid.svg";
import imgBooks from "./assets/book-journal-whills-solid.svg";
import "./styles.css";

export default function FiltroLateral({ onCategoriaChange }) {
  const handleCategoriaClick = (categoria) => {
    onCategoriaChange(categoria);
  };
  return (
    <aside className="barra-lateral">
      <div className="barra-lateral__logo">
        <img src={imgAstronauta} />
        <div>
          <a href="#" onClick={() => handleCategoriaClick("")}>
            <h3>MEU FANDOM</h3>
            <h4>VERSO</h4>
          </a>
        </div>
      </div>
      <nav>
        <ul className="lista-categorias">
          <li>
            <a href="#" onClick={() => handleCategoriaClick("me")}>
              <img src={imgUser} alt="" />
              <span>Meu universo</span>
            </a>
          </li>
          <li>
            <a href="#" onClick={() => handleCategoriaClick("visual")}>
              <img src={imgMovies} alt="" />
              <span>Filmes, Séries & Animes</span>
            </a>
          </li>
          <li>
            <a href="#" onClick={() => handleCategoriaClick("escrito")}>
              <img src={imgBooks} alt="" />
              <span>Livros & Mangás</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
