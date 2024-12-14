
  // cargarComponentes.js
document.addEventListener("DOMContentLoaded", function () {
    // Cargar Navbar
    fetch("../componentesProcesoInscripcion/componentesProcesoInscripcion.html")
      .then(response => response.text())
      .then(data => {
        const tempElement = document.createElement("div");
        tempElement.innerHTML = data;
  
        // Insertar el Navbar
        const navbar = tempElement.querySelector("#navbarProceso");
        if (navbar) {
          document.getElementById("navbar_conteiner").appendChild(navbar);
        }
  
        // Insertar el Menú Lateral
        const menuLateral = tempElement.querySelector("#menuLateral");
        if (menuLateral) {
          document.getElementById("contenedor_menu_lateral").appendChild(menuLateral);
        }

      })
      .catch(error => console.error("Error al cargar componentes:", error));

      
      
  });
  