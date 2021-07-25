const btnOpenClose = document.querySelector(".open__close__btn");


btnOpenClose.addEventListener("click", OpenClose);

function OpenClose(){
  btnOpenClose.classList.toggle("open__close");
  document.querySelector("nav").classList.toggle("nav");
  document.querySelectorAll(".title").forEach(element => element.classList.toggle("title__return"));
  document.querySelectorAll("li a").forEach(link => link.style.width = "245px");
  document.querySelector(".fa-angle-double-right").classList.toggle("rotate__icon");
}



