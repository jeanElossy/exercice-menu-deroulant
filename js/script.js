const btnOpen = document.querySelector(".open__close__btn");

btnOpen.addEventListener("click", Open, false);
function Open(){
  btnOpen.classList.add("open");
  document.querySelector("nav").style.width = "18%";
  document.querySelectorAll(".title").forEach(element => element.style.visibility = "visible");
  document.querySelectorAll("li a").forEach(link => link.style.width = "230px");
  document.querySelector(".fa-angle-double-right").style.transform = "rotate(180deg)";
}

// btnOpen.addEventListener("click", Close, false);
// function Close(){
//   btnOpen.removeEventListener("click",Open, false);
//   document.querySelector("nav").style.width = "6%";
//   document.querySelectorAll(".title").forEach(element => element.style.visibility = "hidden");
//   document.querySelectorAll("li a").forEach(link => link.style.width = "70px");
// }


