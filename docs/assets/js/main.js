"use strict";const grid=new Muuri(".grid",{layout:{rounding:!1}});window.addEventListener("load",()=>{grid.refreshItems().layout(),document.getElementById("grid").classList.add("imagenes-cargadas");const e=document.querySelectorAll("#categorias a");e.forEach(t=>{t.addEventListener("click",t=>{t.preventDefault(),e.forEach(e=>e.classList.remove("active")),t.target.classList.add("active");const r=t.target.innerHTML.toLowerCase();"todos"===r?grid.filter("[data-category]"):grid.filter(`[data-category=${r}]`)})}),document.querySelector(".header__input").addEventListener("keyup",e=>{console.log(e.target.value);const t=e.target.value;grid.filter(e=>e.getElement().dataset.tags.includes(t))});const t=document.querySelector(".overlay");document.querySelectorAll(".grid__item__contenido__foto").forEach(e=>{e.addEventListener("click",()=>{const r=e.getAttribute("src"),a=e.parentNode.parentNode.dataset.description;t.classList.add("js-active"),document.querySelector(".overlay__container__picture").src=r,document.querySelector(".overlay__text").innerHTML=a})}),document.querySelector(".overlay__container__btn").addEventListener("click",()=>{t.classList.remove("js-active")}),t.addEventListener("click",e=>{"overlay"===e.target.id&&t.classList.remove("js-active")})});