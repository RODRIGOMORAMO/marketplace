function Card({ titulo, descripcion, precio, imagen }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img src={imagen} className="card-img-top" alt={titulo} />
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text text-muted">{descripcion}</p>
          <p className="fw-bold">${precio}</p>
          <button className="btn btn-primary w-100">Ver detalle</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
