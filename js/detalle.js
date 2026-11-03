const cantidad = document.querySelector("#cantidad");
const botonSumar = document.querySelector("#sumar");
const botonRestar = document.querySelector("#restar");

botonSumar.addEventListener("click", function() {
    cantidad.value = Number(cantidad.value) + 1;
});

botonRestar.addEventListener("click", function() {
    if (Number(cantidad.value) > 1) {
        cantidad.value = Number(cantidad.value) - 1;
    }
});

const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const cantidadSeleccionada = Number(cantidad.value);

    if (cantidadSeleccionada < 1 || !Number.isInteger(cantidadSeleccionada)) {
        alert("Selecciona una cantidad válida.");
        return;
    }

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    const productoSeleccionado = {
        id: 1,
        nombre: "Labial Mate Rojo",
        precio: 25000,
        cantidad: cantidadSeleccionada
    };

    carrito.push(productoSeleccionado);

    localStorage.setItem("carrito", JSON.stringify(carrito));

    alert("¡Producto agregado al carrito!");

    formulario.reset();
    cantidad.value = 1;
});

const miniaturas = document.querySelectorAll(".thumb-img");
const imagenPrincipal = document.querySelector(".main-img-box img");

miniaturas.forEach(miniatura => {

    miniatura.addEventListener("click", function() {

        imagenPrincipal.src = miniatura.src;
        imagenPrincipal.alt = miniatura.alt;

    });

});