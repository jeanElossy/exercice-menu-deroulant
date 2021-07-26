const btnOpenClose = document.querySelector(".open__close__btn");

document.querySelector(".link").focus();

btnOpenClose.addEventListener("click", OpenClose);
function OpenClose(){
  btnOpenClose.classList.toggle("open__close");
  document.querySelector("nav").classList.toggle("nav");
  document.querySelectorAll(".title").forEach(element => element.classList.toggle("title__return"));
  document.querySelector(".fa-angle-double-right").classList.toggle("rotate__icon");
  Active();
  widthSelector();
}

function widthSelector(){
  if(document.querySelector("nav").style.width === "70px"){
    document.querySelectorAll(".link").forEach(link => link.style.width = "60px");
  }else{
    document.querySelectorAll(".link").forEach(link => link.style.width = "245px");
  }
}

function Active(){
  document.querySelector(".link").focus();
}