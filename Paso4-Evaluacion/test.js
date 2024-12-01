//medidor de puntaje
let puntosAcumulados = 0;
let puntajeMax = 2;

let intentos =0;


//Funcion pregunta 1
document.getElementById("respuesta1").addEventListener("click", function () {

  const respuestaSeleccionada = document.querySelector('input[name="opciones1"]:checked');
  const estadoRespuesta = document.getElementById("estadoRespuesta");

  if (!respuestaSeleccionada) {
    estadoRespuesta.textContent = "Por favor, selecciona una respuesta.";
    return;
  }

  const respuestaCorrecta = "option1"; 
  if (respuestaSeleccionada.value === respuestaCorrecta) {
    estadoRespuesta.textContent = "¡Correcto! Elegiste la respuesta correcta";
    puntosAcumulados++;
    console.log("Puntos acumulados:" + puntosAcumulados);
    console.log("Puntaje Maximo:" + puntajeMax);
  } else {
    estadoRespuesta.textContent = "Incorrecto. No seleccionaste la respuesta correcta";
  }
});


// Función para redirigir a la página siguiente (pregunta2.html)
document.getElementById("aPregunta2").addEventListener("click", function () {
  console.log("Redirigiendo a la siguiente página...");
  window.location.href = "pregunta2.html"; // Cambia esta URL por la deseada
});


// Función para la pregunta 2
document.getElementById("respuesta2").addEventListener("click", function () {
  console.log("Se escucha el click en respuesta2");
  
  const respuestaSeleccionada2 = document.querySelector('input[name="opciones2"]:checked');
  const estadoRespuesta2 = document.getElementById("estadoRespuesta2");
  
  if (!respuestaSeleccionada2) {
    estadoRespuesta2.textContent = "Por favor, selecciona una respuesta.";
    return;
  }
  const respuestaCorrecta2 = "option2"; 
  if (respuestaSeleccionada2.value === respuestaCorrecta2) {
    estadoRespuesta2.textContent = "¡Correcto! Elegiste la respuesta correcta";
    puntosAcumulados++;
    console.log("Puntos acumulados: " + puntosAcumulados);
    console.log("Puntaje maximo: " + puntajeMax);
  } else {
    estadoRespuesta2.textContent = "Incorrecto. No seleccionaste la respuesta correcta";
  }
});

  // Pasar a ver el resultado final
  document.getElementById("finalizar").addEventListener("click", function () {
    console.log("se escucha el click")
    window.location.href = "resultados.html";
  });

