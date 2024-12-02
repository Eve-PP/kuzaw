//const miModal1 = new bootstrap.Modal(document.getElementById('check1'))

  


  document.addEventListener('DOMContentLoaded', () => {
    const miModal2 = new bootstrap.Modal(document.getElementById('check1'));
  
    function pregunta1() {
      miModal2.show();
      console.log("prueba_1");
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


    }
  
    // Llama a la función para probar
    pregunta1();
  });
  