function Kimia({unsur, simbol}) {
  return (
    <div className="element-card">
      <h2 className="element-unsur">Unsur {unsur}</h2>
      <p className="element-symbol">{simbol}</p>
    </div>
  );
}

export default Kimia;