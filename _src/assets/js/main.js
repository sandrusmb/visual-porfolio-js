"use strict";

const grid = new Muuri(".grid", {
  layout: {
    rounding: false
  }
});

window.addEventListener("load", () => {
  grid.refreshItems().layout();
  document.getElementById("grid").classList.add("imagenes-cargadas");

  const enlaces = document.querySelectorAll("#categorias a");
  console.log(enlaces);
  enlaces.forEach(elemento => {
    elemento.addEventListener("click", ev => {
      ev.preventDefault();
      enlaces.forEach(enlace => enlace.classList.remove("active"));
      ev.target.classList.add("active");

      const category = ev.target.innerHTML.toLowerCase();
      console.log(category);
      category === "todos"
        ? grid.filter("[data-category]")
        : grid.filter(`[data-category=${category}]`);
    });
  });
});
