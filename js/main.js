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

let en3ismodal = document.querySelector("#en3-ismodal");
let en5ismodal = document.querySelector("#en5-ismodal");
let en7ismodal = document.querySelector("#en7-ismodal");

let en3modal = document.querySelector("#en3-modal");
let en5modal = document.querySelector("#en5-modal");
let en7modal = document.querySelector("#en7-modal");


let mooutmodal = document.querySelector("#mo-out-modal");
let proutmodal = document.querySelector("#pr-out-modal");
let afoutmodal = document.querySelector("#af-out-modal");

let mmooutmodal = document.querySelector("#mmo-out-modal");
let mproutmodal = document.querySelector("#mpr-out-modal");
let mafoutmodal = document.querySelector("#maf-out-modal");

let en3outmodal = document.querySelector("#en3-out-modal");
let en5outmodal = document.querySelector("#en5-out-modal");
let en7outmodal = document.querySelector("#en7-out-modal");

momodal.addEventListener("click", moopen);
prmodal.addEventListener("click", propen);
afmodal.addEventListener("click", afopen);

en3modal.addEventListener("click", en3open);
en5modal.addEventListener("click", en5open);
en7modal.addEventListener("click", en7open);

proutmodal.addEventListener("click", prclose);
mooutmodal.addEventListener("click", moclose);
afoutmodal.addEventListener("click", afclose);

mproutmodal.addEventListener("click", mprclose);
mmooutmodal.addEventListener("click", mmoclose);
mafoutmodal.addEventListener("click", mafclose);

en3outmodal.addEventListener("click", en3close);
en5outmodal.addEventListener("click", en5close);
en7outmodal.addEventListener("click", en7close);

function moclose() {
  moismodal.classList.remove("active");
}
function prclose() {
  prismodal.classList.remove("active");
}
function afclose() {
  afismodal.classList.remove("active");
}

function mmoclose() {
  moismodal.classList.remove("active");
}
function mprclose() {
  prismodal.classList.remove("active");
}
function mafclose() {
  afismodal.classList.remove("active");
}

function en3close() {
  en3ismodal.classList.remove("reco-active");
}
function en5close() {
  en5ismodal.classList.remove("reco-active");
}
function en7close() {
  en7ismodal.classList.remove("reco-active");
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


function en3open() {
  en3ismodal.classList.add("reco-active");
}
function en5open() {
  en5ismodal.classList.add("reco-active");
}
function en7open() {
  en7ismodal.classList.add("reco-active");
}
