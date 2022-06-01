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
