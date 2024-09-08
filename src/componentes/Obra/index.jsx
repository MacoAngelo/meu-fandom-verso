import DadosObra from "../DadosObra";
import "./styles.css";

export default function Obra({ obra, trazerDados }) {
  let nomeObra = obra.titulo;
  if (obra.titulo.length > 16) {
    nomeObra = `${obra.titulo.substring(0, 16)}...`;
  }

  return (
    <article className="container-obra">
      <h2>{nomeObra}</h2>
      <div className="container-obra__imagem">
        <img src={obra.imagem} />
      </div>
      <div className="container-obra__informacoes">
        <p>{obra.sinopse.substring(0, 80) + "(...)"}</p>
        <div className="container-obra__genero">
          <span>{obra.genero.join(", ")}</span>
        </div>
        <div className="container-obra__lancamento">
          <span>Ano de lançamento: </span>
          <span>2002</span>
        </div>
      </div>
      {obra.minhaLista && trazerDados && (
        <DadosObra tipo={obra.tipo} dados={obra.minhaLista} />
      )}
    </article>
  );
}
