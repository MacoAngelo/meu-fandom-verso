import "./styles.css";

export default function BarraPesquisa({ valor, onChange }) {
  return (
    <div className="container-busca">
      <input
        type="search"
        value={valor}
        placeholder="Pesquise por nome"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
