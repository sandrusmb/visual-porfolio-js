"use strict";

const grid = new Muuri(".grid", {
  layout: {
    rounding: false
  }
});

window.addEventListener("load", () => {
  grid.refreshItems().layout();
  document.getElementById("grid").classList.add("imagenes-cargadas");

  //listener de los enlaces para filtrar por categoría
  const enlaces = document.querySelectorAll("#categorias a");

  enlaces.forEach(elemento => {
    elemento.addEventListener("click", ev => {
      ev.preventDefault();
      enlaces.forEach(enlace => enlace.classList.remove("active"));
      ev.target.classList.add("active");

      const category = ev.target.innerHTML.toLowerCase();

      category === "todos"
        ? grid.filter("[data-category]")
        : grid.filter(`[data-category=${category}]`);
    });
  });

  // listener para el input de texto
  document.querySelector(".header__input").addEventListener("keyup", ev => {
    console.log(ev.target.value);
    const busqueda = ev.target.value;
    grid.filter(item => item.getElement().dataset.tags.includes(busqueda));
  });

  //listener para las imágenes

  const overlay = document.querySelector(".overlay");
  document
    .querySelectorAll(".grid__item__contenido__foto")
    .forEach(elemento => {
      elemento.addEventListener("click", () => {
        const ruta = elemento.getAttribute("src");
        const description = elemento.parentNode.parentNode.dataset.description;
        overlay.classList.add("js-active");
        document.querySelector(".overlay__container__picture").src = ruta;
        document.querySelector(".overlay__text").innerHTML = description;
      });
    });

  //eventlistener del boton de cerrar
  document
    .querySelector(".overlay__container__btn")
    .addEventListener("click", () => {
      overlay.classList.remove("js-active");
    });
});

//Mejoras: separar las funciones. Añadir un mensaje cuando no encuentre fotos buscando por el input de texto. Coger los datos de un json/api.
