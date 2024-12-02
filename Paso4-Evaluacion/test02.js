
let puntosAcumulados2=0;

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
      puntosAcumulados2++;
      console.log("Puntos acumulados: " + puntosAcumulados2);
     
    } else {
      estadoRespuesta2.textContent = "Incorrecto. No seleccionaste la respuesta correcta";
    }
  });
  
    // Pasar a ver el resultado final
    document.getElementById("finalizar").addEventListener("click", function () {
      console.log("se escucha el click")
      window.location.href = "resultados.html";
    });
  
