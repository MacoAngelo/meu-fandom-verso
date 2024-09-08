import plusIcon from "./assets/plus-solid.svg";
import minusIcon from "./assets/minus-solid.svg";

import "./styles.css";

export default function DadosObra({ tipo, dados }) {
  let renderizarControle =
    dados.temporada != null || dados.episodio != null || dados.pagina != null;

  return (
    <section className="dados-obra-container">
      <div className="dados-obra-container__dados-semanticos">
        {dados.visto != null && !dados.visto && <button>Iniciar Obra</button>}
        {dados.visto != null && dados.visto && (
          <button>Só mais uma vez!</button>
        )}
      </div>
      <div className="dados-obra-container__dados-numericos">
        <div className="dados-numericos__informacoes">
          {dados.temporada != null && <span>Temporada: {dados.temporada}</span>}
          {dados.episodio != null && <span>Episódio: {dados.episodio}</span>}
          {dados.pagina != null && <span>Página: {dados.pagina}</span>}
        </div>
        {renderizarControle && (
          <div className="dados-numericos__controle">
            <button>Voltar</button>
            <button>Avancar</button>
          </div>
        )}
      </div>
    </section>
  );
}
