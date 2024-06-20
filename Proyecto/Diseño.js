document.addEventListener("DOMContentLoaded", function () {
  var titulo = document.querySelector(".titulo");
  titulo.addEventListener("click", function () {
    var secciones = document.querySelectorAll(".seccion");
    secciones.forEach(function (seccion) {
      seccion.classList.toggle("oculto");
    });

    var menuDesplegable = document.querySelector(".menu-desplegable");
    menuDesplegable.classList.toggle("oculto");
  });
});
function mostrarMenuServicios() {
  var menuServicios = document.getElementById("servicios");
  menuServicios.classList.toggle("oculto");
}

document.addEventListener("DOMContentLoaded", function () {
  const diasElemento = document.getElementById("dias");
  const eventosElemento = document.getElementById("eventos");
  const flechaIzquierda = document.getElementById("flecha-izquierda");
  const flechaDerecha = document.getElementById("flecha-derecha");

  let fecha = new Date();
  let mesActual = fecha.getMonth();
  let añoActual = fecha.getFullYear();

  const meses = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
  ];

  function renderizarCalendario() {
      diasElemento.innerHTML = "";
      // Agregar días del mes actual
      const primerDiaMes = new Date(añoActual, mesActual, 1).getDay();
      const ultimoDiaMes = new Date(añoActual, mesActual + 1, 0).getDate();
      for (let i = 1; i <= ultimoDiaMes; i++) {
          const dia = document.createElement("div");
          dia.classList.add("dia");
          dia.innerText = i;
          dia.dataset.fecha = `${añoActual}-${String(mesActual + 1).padStart(2, "0")}-${String(i).padStart(2, "0")}`;
          dia.addEventListener("click", mostrarEventosDelDia);
          diasElemento.appendChild(dia);
      }
      // Resaltar la fecha actual
      const diaActual = fecha.getDate();
      const dias = diasElemento.querySelectorAll(".dia");
      dias.forEach(dia => {
          if (parseInt(dia.innerText) === diaActual) {
              dia.classList.add("current-date");
          }
      });
      // Mostrar mes y año
      document.getElementById("mes-ano").innerText = `${meses[mesActual]} ${añoActual}`;
  }

  function mostrarEventosDelDia(event) {
      const fechaSeleccionada = event.target.dataset.fecha;
      eventosElemento.innerHTML = `<h3>Eventos del día: ${fechaSeleccionada}</h3>`;
  }

  flechaIzquierda.addEventListener("click", () => {
      if (mesActual === 0) {
          mesActual = 11;
          añoActual--;
      } else {
          mesActual--;
      }
      renderizarCalendario();
  });

  flechaDerecha.addEventListener("click", () => {
      if (mesActual === 11) {
          mesActual = 0;
          añoActual++;
      } else {
          mesActual++;
      }
      renderizarCalendario();
  });

  renderizarCalendario();
});

function loadCalendar() {
    var calendarContainer = document.getElementById('calendar-container');
    calendarContainer.innerHTML = '<iframe src="https://calendar.google.com/calendar/embed?src=b8dcf93ab64bf4a2a9a94f449b5e309a07e5c91267202378a7a789a32a3469be%40group.calendar.google.com&ctz=America%2FTegucigalpa" style="border:0" width="800" height="600" frameborder="0" scrolling="no"></iframe>';
}

window.onload = loadCalendar;
