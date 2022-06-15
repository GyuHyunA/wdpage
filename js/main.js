// filter
let ci = document.querySelector(".circle");
let fi = document.querySelector(".fi");
let bt = document.querySelector(".bt");
let fi2 = document.querySelector(".fi2");
let bt2 = document.querySelector(".bt2");
let fi3 = document.querySelector(".fi3");
let bt3 = document.querySelector(".bt3");

function ovmo() {
  fi.classList.add("fi-active");
  bt.classList.add("bt-active");
}
function outmo() {
  fi.classList.remove("fi-active");
  bt.classList.remove("bt-active");
}
function ovmo2() {
  fi2.classList.add("fi-active");
  bt2.classList.add("bt-active");
}
function outmo2() {
  fi2.classList.remove("fi-active");
  bt2.classList.remove("bt-active");
}
function ovmo3() {
  fi3.classList.add("fi-active");
  bt3.classList.add("bt-active");
}
function outmo3() {
  fi3.classList.remove("fi-active");
  bt3.classList.remove("bt-active");
}

// modal
let moismodal = document.querySelector("#mo-ismodal");
let prismodal = document.querySelector("#pr-ismodal");
let afismodal = document.querySelector("#af-ismodal");

let momodal = document.querySelector("#mo-modal");
let prmodal = document.querySelector("#pr-modal");
let afmodal = document.querySelector("#af-modal");

let mooutmodal = document.querySelector("#mo-out-modal");
let proutmodal = document.querySelector("#pr-out-modal");
let afoutmodal = document.querySelector("#af-out-modal");

momodal.addEventListener("click", moopen);
prmodal.addEventListener("click", propen);
afmodal.addEventListener("click", afopen);

proutmodal.addEventListener("click", prclose);
mooutmodal.addEventListener("click", moclose);
afoutmodal.addEventListener("click", afclose);

function moclose() {
  moismodal.classList.remove("active");
}
function prclose() {
  prismodal.classList.remove("active");
}
function afclose() {
  afismodal.classList.remove("active");
}

function moopen() {
  moismodal.classList.add("active");
}
function propen() {
  prismodal.classList.add("active");
}
function afopen() {
  afismodal.classList.add("active");
}
