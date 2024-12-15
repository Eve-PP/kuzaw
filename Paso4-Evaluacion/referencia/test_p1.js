//medidor de puntaje
export let puntosAcumulados = 0;
module.exports.variable1 = 10;


//Funcion pregunta 1
document.getElementById("respuesta1").addEventListener("click", function () {

  console.log("Puntos iniciales:" + puntosAcumulados);

  const respuestaSeleccionada = document.querySelector('input[name="opciones1"]:checked');
  const estadoRespuesta = document.getElementById("estadoRespuesta");

  if (!respuestaSeleccionada) {
    estadoRespuesta.textContent = "Por favor, selecciona una opcion.";
    console.log("Puntos posibles: 0 o 1");
    return;
  }

  const respuestaCorrecta = "option1"; 
  if (respuestaSeleccionada.value === respuestaCorrecta) {
    estadoRespuesta.textContent = "¡Correcto! Elegiste la respuesta correcta";
    puntosAcumulados++;
    console.log("Puntos acumulados:" + puntosAcumulados);

  } else {
    estadoRespuesta.textContent = "Incorrecto. No seleccionaste la respuesta correcta";
    console.log("Puntos perdidos: 1");
  }
});


// Función para redirigir a la página siguiente (pregunta2.html)
document.getElementById("aPregunta2").addEventListener("click", function () {
  console.log("Redirigiendo a la siguiente página...");
  window.location.href = "pregunta2.html"; // Cambia esta URL por la deseada
});


