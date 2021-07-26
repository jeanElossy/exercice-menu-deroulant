const btnOpenClose = document.querySelector(".open__close__btn");

btnOpenClose.addEventListener("click", OpenClose);
function OpenClose(){
  btnOpenClose.classList.toggle("open__close");
  document.querySelector("nav").classList.toggle("nav");
  document.querySelectorAll(".title").forEach(element => element.classList.toggle("title__return"));
  document.querySelector(".fa-angle-double-right").classList.toggle("rotate__icon");
  widthSelector();
}

function widthSelector(){
  if(document.querySelector("nav").style.width === "6%"){
    document.querySelectorAll(".link").forEach(link => link.style.width = "60px");
  }else{
    document.querySelectorAll(".link").forEach(link => link.style.width = "220px");
  }
  
}
