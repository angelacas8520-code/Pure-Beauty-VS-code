
import { useState } from 'react'
import './App.css'
import ProductCatalog from './components/ProductCatalog'

function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <a href="/" className="logo-area">
          <img
  src="/img/logo.png"
  alt="Logo Pure Beauty"
  className="logo-img"
/>
        </a>

        <div className="nav-and-actions">
          <div className="top-nav-row">
            <nav>
              <ul className="nav-links">
                <li><a href="/" className="nav-link active">Inicio</a></li>
                <li><a href="#" className="nav-link">Productos</a></li>
                <li><a href="#" className="nav-link">Novedades</a></li>
              </ul>
            </nav>

            <div className="search-cart-area">
              <div className="search-box">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Buscar productos..."
                  aria-label="Buscar productos"
                />
                <button className="search-btn" type="button" aria-label="Buscar">
                  🔍
                </button>
              </div>

              <button
                className="cart-icon"
                type="button"
                aria-label="Carrito de compras"
                onClick={() => alert('Carrito vacío')}
              >
                🛒
              </button>
            </div>
          </div>
          <div className="nav-divider"></div>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-img-col">
        <img src="/img/makeup.png" alt="Maquillaje Pure Beauty" />
      </div>

      <div className="hero-text-col">
        <h1 className="hero-title">Realza tu belleza</h1>
        <p className="hero-subtitle">
          Maquillaje de calidad para brillar todos los días
        </p>
        <a href="#" className="btn btn-magenta">
          PÁGINA DE INICIO →
        </a>
      </div>
    </section>
  )
}

function LoginForm() {
  const [correo, setCorreo] = useState('')
  const [contrasena, setContrasena] = useState('')
  const [mensaje, setMensaje] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (!correo || !contrasena) {
      setMensaje('Por favor, completa todos los campos.')
      return
    }

    setMensaje('Formulario enviado correctamente.')
  }

  return (
    <section className="login-section">
      <h2>Iniciar sesión</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="correo">Correo electrónico</label>
          <input
            type="email"
            id="correo"
            placeholder="Ingresa tu correo"
            value={correo}
            onChange={(event) => setCorreo(event.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contrasena">Contraseña</label>
          <input
            type="password"
            id="contrasena"
            placeholder="Ingresa tu contraseña"
            value={contrasena}
            onChange={(event) => setContrasena(event.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-magenta">
          Iniciar sesión
        </button>

        <p id="mensaje-login">{mensaje}</p>
      </form>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <span className="logo-text">PURE BEAUTY</span>
        <p className="footer-text">
          © 2026 Pure Beauty. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

function App() {
  return (
    <>
      <Header />
      <main className="container">
  <Hero />
  <ProductCatalog />
  <LoginForm />
</main>
      <Footer />
    </>
  )
}

export default App
