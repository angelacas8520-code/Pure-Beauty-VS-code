
function ProductCard({ nombre, precio, imagen, cantidad, onAgregar }) {
  return (
    <article className="product-card">
      <div className="product-card-img-box">
        <img src={imagen} alt={nombre} />
      </div>

      <h3 className="product-card-title">{nombre}</h3>

      <span className="product-card-price">
        {Number(precio).toLocaleString('es-CO', {
          style: 'currency',
          currency: 'COP',
          maximumFractionDigits: 0
        })}
      </span>

      <p className="product-card-stock">
        Disponibles: {cantidad}
      </p>

      <button
        type="button"
        className="btn btn-magenta"
        onClick={onAgregar}
      >
        Agregar al carrito
      </button>
    </article>
  )
}

export default ProductCard
