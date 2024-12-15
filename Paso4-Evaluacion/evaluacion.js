
console.log("Archivo JS cargado correctamente");
document.addEventListener('DOMContentLoaded', () => {

const preguntas = [
  {
    pregunta: "Pregunta 1",
    opciones: ["Opcion 1", "Opcion 2", "Opcion 3", "Opcion 4"],
    respuesta: 0 // Índice de la respuesta correcta
  },
  {
    pregunta: "Pregunta 2",
    opciones: ["Opcion 1", "Opcion 2", "Opcion 3", "Opcion 4"],
    respuesta: 1 // Índice de la respuesta correcta
  },
  {
    pregunta: "Pregunta 3",
    opciones: ["Opcion 1", "Opcion 2", "Opcion 3", "Opcion 4"],
    respuesta: 2 // Índice de la respuesta correcta
  }
];

let preguntaActual = 0;
let puntaje = 0;
const totalPreguntas = preguntas.length;

const quizContainer = document.getElementById("quiz-container");
const tituloContainer = document.getElementById("titulo-container");
const submitBtn = document.getElementById("submit-btn");
const feedbackModal = new bootstrap.Modal(document.getElementById('feedbackModal'), {
  backdrop: 'static',
  keyboard: false
});
const modalBody = document.getElementById("modal-body-feedback");
const nextQuestionBtn = document.getElementById("next-question-btn");
const resultContainer = document.getElementById("result-container");
const scoreText = document.getElementById("score");
const percentageText = document.getElementById("percentage");
const puntajeTotalText = document.getElementById("puntaje-total");
const approvalText = document.getElementById("approval");
const approvalIcon = document.getElementById("approval-icon");
const btnFinTest = document.getElementById("continuar-a-paso-5")

let respuestaSeleccionada = null;

// Mostrar pregunta
function mostrarPregunta() {
  const preguntaObj = preguntas[preguntaActual];
  respuestaSeleccionada = null;
  submitBtn.disabled = true;

  quizContainer.innerHTML = `
    <h3>${preguntaObj.pregunta}</h3>
    <form>
      ${preguntaObj.opciones.map((opcion, index) => `
        <div class="form-check">
          <input class="form-check-input" type="radio" name="opcion" id="opcion${index}" value="${index}">
          <label class="form-check-label" for="opcion${index}">
            ${opcion}
          </label>
        </div>
      `).join('')}
    </form>
  `;

  // Escucha el cambio en la selección de las opciones
  document.querySelectorAll('input[name="opcion"]').forEach(input => {
    input.addEventListener('change', (e) => {
      respuestaSeleccionada = parseInt(e.target.value);
      submitBtn.disabled = false;
    });
  });
}


// Validar respuesta
submitBtn.addEventListener("click", () => {

  /*
  if (respuestaSeleccionada === null) {
    console.log("prueba")
    modalBody.innerHTML = `<div class="text-warning">Por favor, selecciona una respuesta antes de continuar.</div>`;
    feedbackModal.show();
    return; // Evita continuar si no se ha seleccionado respuesta
  };*/

  const preguntaObj = preguntas[preguntaActual];
  const esCorrecto = respuestaSeleccionada === preguntaObj.respuesta;

  console.log("prueba0")
  if (esCorrecto) {
    puntaje++;
    modalBody.innerHTML = `<div class="text-success">¡Respuesta Correcta!</div>`;
  } else {
    modalBody.innerHTML = `<div class="text-danger">Respuesta Incorrecta.</div>`;
  }

  feedbackModal.show();
});

// Mostrar siguiente pregunta o resultados finales
nextQuestionBtn.addEventListener("click", () => {
  feedbackModal.hide();
  preguntaActual++;
  if (preguntaActual < totalPreguntas) {
    mostrarPregunta();
  } else {
    mostrarResultados();
  }
});

// Mostrar resultados finales
function mostrarResultados() {
  quizContainer.classList.add("d-none");
  tituloContainer.classList.add("d-none");
  resultContainer.classList.remove("d-none");
  const porcentaje = Math.round((puntaje / totalPreguntas) * 100);
  scoreText.innerText = puntaje;
  //scoreText.innerText = `Puntaje: ${puntaje} de ${totalPreguntas}`;
  percentageText.innerText = `${porcentaje}%`;
  //percentageText.innerText = `Porcentaje: ${porcentaje}%`;
  puntajeTotalText.innerText = `PuntajeTotal: ${totalPreguntas}`;
  //approvalText.innerText = porcentaje >= 80 ? "¡Buen trabajo, has aprobado!" : "No aprobaste.";
  if (porcentaje >= 80) {
    approvalIcon.innerHTML = `<i class="bi bi-check-circle-fill display-1 text-success"></i>`;
    approvalText.innerText = "¡Buen trabajo, has aprobado!";
    btnFinTest.innerHTML = `<a  id="continuar-a-paso-5" type="button" class="btn btn-primary btn-lg w-25" href="../Paso5-Fin/enunciadoFinal.html">Siguiente</a>`;  
    } else {
    approvalIcon.innerHTML = `<i class="bi bi-x-circle-fill display-1 text-danger" ></i>`;
    approvalText.innerText = "No aprobaste.";
    btnFinTest.innerHTML = `<a  id="continuar-a-paso-5" type="button" class="btn btn-primary btn-lg w-25" href="../Paso3-Capacitacion/capacitacionVideo.html"> A Estudiar...</a>`;  

  }



}


mostrarPregunta(); 
});