const datos = {
  congestion: {
    titulo: "Congestión nasal",
    afecciones: ["Rinitis", "Sinusitis", "Obstrucción nasal"],
  },

  oido: {
    titulo: "Molestias en el oído",
    afecciones: ["Otitis", "Tapón de cerumen", "Presbiacucia"],
  },

  voz: {
    titulo: "Cambios en la voz",
    afecciones: ["Disfonía", "Nódulos vocales", "Ronquera"],
  },

  vertigo: {
    titulo: "Mareos o vértigo",
    afecciones: [
      "Trastornos del equilibrio",
      "Enfermedad de Ménière",
      "Vértigo posicional",
    ],
  },

  audicion: {
    titulo: "Problemas de audición",
    afecciones: [
      "Trastorno del procesamiento auditivo",
      "Acúfenos (zumbidos)",
      "Pérdida auditiva",
    ],
  },

  rinoplastia: {
    titulo: "Problemas respiratorios o estéticos",
    afecciones: [
      "Desviación del tabique",
      "Obstrucción nasal",
      "Rinoplastía funcional y estética",
    ],
  },
};

const botones = document.querySelectorAll(".sintoma-btn");
const titulo = document.getElementById("sintoma-seleccionado");
const contenedor = document.getElementById("contenedor-afecciones");
const botonesSintoma = document.querySelectorAll(".sintoma-btn");

botonesSintoma.forEach((boton) => {
  boton.addEventListener("click", () => {
    boton.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
  });
});

function cambiarContenido(clave) {
  const info = datos[clave];

  titulo.textContent = info.titulo;

  contenedor.innerHTML = "";

  info.afecciones.forEach((afeccion) => {
    contenedor.innerHTML += `
      <div class="tarjeta-afeccion-item">
        <div class="indicador-azul"></div>
        <span>${afeccion}</span>
      </div>
    `;
  });
}

botones.forEach((boton) => {
  boton.addEventListener("mouseenter", () => {
    botones.forEach((b) => b.classList.remove("active"));
    boton.classList.add("active");

    cambiarContenido(boton.dataset.sintoma);
  });

  boton.addEventListener("click", () => {
    botones.forEach((b) => b.classList.remove("active"));
    boton.classList.add("active");

    cambiarContenido(boton.dataset.sintoma);
  });
});
