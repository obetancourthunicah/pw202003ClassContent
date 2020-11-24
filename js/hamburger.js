document.addEventListener("DOMContentLoaded", page_init);
var hmbBtn = null;
var navElm = null;
function page_init (){
  hmbBtn = document.getElementsByClassName("hmbbttn")[0];
  navElm = document.querySelectorAll("header nav")[0];
  hmbBtn.addEventListener("click", hmbBtn_click);
}

function hmbBtn_click(e){
  e.preventDefault();
  e.stopPropagation();
  //navElm.className = (navElm.className=="open")?"":"open";
  navElm.classList.toggle("open"); //Recommended by Nataly
}
