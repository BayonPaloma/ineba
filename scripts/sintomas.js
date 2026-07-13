const datos = {
  congestion: {
    titulo: "Congestión nasal",
    afecciones: ["Rinitis", "Sinusitis", "Obstrucción nasal"],
  },

  oido: {
    titulo: "Molestias en el oído",
    afecciones: ["Otitis", "Tapón de cerumen", "Perforación timpánica"],
  },

  voz: {
    titulo: "Cambios en la voz",
    afecciones: ["Disfonía", "Nódulos vocales", "Laringitis"],
  },

  vertigo: {
    titulo: "Mareos o vértigo",
    afecciones: [
      "Vértigo posicional",
      "Enfermedad de Ménière",
      "Neuronitis vestibular",
    ],
  },

  audicion: {
    titulo: "Problemas de audición",
    afecciones: ["Hipoacusia", "Otosclerosis", "Pérdida auditiva"],
  },

  rinoplastia: {
    titulo: "Problemas respiratorios o estéticos",
    afecciones: [
      "Desviación del tabique",
      "Hipertrofia de cornetes",
      "Evaluación para rinoplastia",
    ],
  },
};

const botones = document.querySelectorAll(".sintoma-btn");
const titulo = document.getElementById("sintoma-seleccionado");
const contenedor = document.getElementById("contenedor-afecciones");

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

  // Para celulares
  boton.addEventListener("click", () => {
    botones.forEach((b) => b.classList.remove("active"));
    boton.classList.add("active");

    cambiarContenido(boton.dataset.sintoma);
  });
});
