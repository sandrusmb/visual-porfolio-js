"use strict";

const grid = new Muuri(".grid", {
  layout: {
    rounding: false
  }
});

window.addEventListener("load", () => {
  grid.refresItems().layout();
  document.getElementById("grid").classList.add("imagenes-cargadas");
});
