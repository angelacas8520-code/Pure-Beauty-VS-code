
import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

function ProductCatalog() {
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('http://localhost:8080/api/productos')
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error('No se pudieron cargar los productos')
        }
        return respuesta.json()
      })
      .then((datos) => {
        setProductos(datos)
        setCargando(false)
      })
      .catch((error) => {
        setError(error.message)
        setCargando(false)
      })
  }, [])

  function agregarAlCarrito(nombre) {
    alert(`${nombre} agregado al carrito`)
  }

  if (cargando) {
    return <p>Cargando productos...</p>
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  return (
    <section>
      <h2 className="catalog-title">Nuestros productos</h2>

      <div className="catalog-grid">
        {productos.map((producto) => (
          <ProductCard
            key={producto.id}
            nombre={producto.nombre}
            precio={producto.precio}
            cantidad={producto.cantidad}
            imagen="/img/base.png"
            onAgregar={() => agregarAlCarrito(producto.nombre)}
          />
        ))}
      </div>
    </section>
  )
}

export default ProductCatalog
