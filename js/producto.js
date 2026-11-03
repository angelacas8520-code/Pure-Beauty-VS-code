const productos = [
    {
        id: 1,
        nombre: "Labial Mate Rojo",
        precio: 25000,
        color: "Rojo",
        talla: "Única",
        categoria: "Labios",
        imagen:"img/labial.png"
    },
    {
        id: 2,
        nombre: "Base Líquida Natural",
        precio: 45000,
        color: "Beige",
        talla: "Única",
        categoria: "Rostro",
        imagen:"img/base.png"
    },
    {
        id: 3,
        nombre: "Paleta de Sombras",
        precio: 55000,
        color: "Marrón",
        talla: "Única",
        categoria: "Ojos",
        imagen:"img/sombra.png"
    },
    {
        id: 4,
        nombre: "Brocha para Polvo",
        precio: 18000,
        color: "Negro",
        talla: "Única",
        categoria: "Accesorios",
        imagen:"img/brocha.png"
    }
];

console.log("Lista de productos:", productos);

const productosRojos = productos.filter(producto => {
    return producto.color === "Rojo";
});

console.log("Productos de color rojo:", productosRojos);

const productosTallaUnica = productos.filter(producto => {
    return producto.talla === "Única";
});

console.log("Productos de talla única:", productosTallaUnica);

const precioTotal = productos.reduce((total, producto) => {
    return total + producto.precio;
}, 0);

console.log("Precio total de todos los productos:", precioTotal);

const contenedorProductos = document.querySelector("#contenedor-productos");
console.log("Contenedor encontrado:", contenedorProductos);
console.log("Página actual:", window.location.href);

function mostrarProductos(listaProductos) {

    contenedorProductos.innerHTML = " ";

    listaProductos.forEach(producto => {

        const tarjeta = document.createElement("article");

        tarjeta.classList.add("product-card");

        tarjeta.innerHTML = `
            <div class="product-card-img-box">
                <img src="${producto.imagen}" alt="${producto.nombre}">
            </div>

            <h2 class="product-card-title">${producto.nombre}</h2>

            <a href="producto.html" class="btn btn-secondary">
            Ver descripción</a>

            <span class="product-card-price">
                $${producto.precio.toLocaleString("es-CO")}
            </span>

            <button class="btn btn-magenta" type="button" onclick="agregarAlCarrito(${producto.id})">
             Comprar
             </button>
        `;

        contenedorProductos.appendChild(tarjeta);
    });
}

mostrarProductos(productos);

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function agregarAlCarrito(id) {
    const productoSeleccionado = productos.find(producto => {
        return producto.id === id;
    });

    carrito.push(productoSeleccionado);

    localStorage.setItem("carrito", JSON.stringify(carrito));

    actualizarCarrito();
}

function actualizarCarrito() {

    localStorage.setItem("carrito", JSON.stringify(carrito));

    const cantidadProductos = carrito.reduce((total, producto) => {
    return total + (producto.cantidad || 1);
}, 0);

const totalCompra = carrito.reduce((total, producto) => {
    return total + (producto.precio * (producto.cantidad || 1));
}, 0);

    document.querySelector("#contador-carrito").textContent =
        `Carrito (${cantidadProductos})`;

    const listaCarrito = document.querySelector("#lista-carrito");

    listaCarrito.innerHTML = "";

    carrito.forEach((producto, indice) => {

        const elemento = document.createElement("p");

        elemento.textContent =
    `${producto.nombre} x${producto.cantidad || 1} - $${(producto.precio * (producto.cantidad || 1)).toLocaleString("es-CO")}`;

        const botonEliminar = document.createElement("button");

        botonEliminar.textContent = "Eliminar";

        botonEliminar.addEventListener("click", function() {
            carrito.splice(indice, 1);
            actualizarCarrito();
        });

        elemento.appendChild(botonEliminar);

        listaCarrito.appendChild(elemento);
    });

    if (carrito.length === 0) {
        listaCarrito.innerHTML = "<p>Tu carrito está vacío.</p>";
    }

    document.querySelector("#total-carrito").textContent =
        `Total: $${totalCompra.toLocaleString("es-CO")}`;
}

const filtroTalla = document.querySelector("#filtro-talla");
const filtroColor = document.querySelector("#filtro-color");

function filtrarProductos() {
    const tallaSeleccionada = filtroTalla.value;
    const colorSeleccionado = filtroColor.value;

    const productosFiltrados = productos.filter(producto => {
        const coincideTalla = tallaSeleccionada === "" || producto.talla === tallaSeleccionada;
        const coincideColor = colorSeleccionado === "" || producto.color === colorSeleccionado;

        return coincideTalla && coincideColor;
    });

    mostrarProductos(productosFiltrados);
}

filtroTalla.addEventListener("change", filtrarProductos);
filtroColor.addEventListener("change", filtrarProductos);

const botonLimpiar = document.querySelector("#limpiar-filtros");

botonLimpiar.addEventListener("click", function() {
    filtroTalla.value = "";
    filtroColor.value = "";

    mostrarProductos(productos);
});
