const formularioLogin = document.querySelector("#formulario-login");
const mensajeLogin = document.querySelector("#mensaje-login");

formularioLogin.addEventListener("submit", function(event) {
    event.preventDefault();

    const correo = document.querySelector("#correo").value.trim();
    const contrasena = document.querySelector("#contrasena").value.trim();

    if (correo === "" || contrasena === "") {
        mensajeLogin.textContent = "Por favor, completa todos los campos.";
        mensajeLogin.style.color = "red";
    } else {
        mensajeLogin.textContent = "¡Formulario enviado correctamente!";
        mensajeLogin.style.color = "green";
    }
});