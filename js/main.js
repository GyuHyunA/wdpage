let modal = document.querySelector("#ismodal");
let momodal = document.querySelector("#mo-modal");
let prmodal = document.querySelector("#pr-modal");
let afmodal = document.querySelector("#af-modal");

let outmodal = document.querySelector("#out-modal");

momodal.addEventListener("click", open);
prmodal.addEventListener("click", open);
afmodal.addEventListener("click", open);

outmodal.addEventListener("click", close);
// console.log(open);

// window.addEventListener('click', close)

function close() {
  modal.classList.remove("active");
}

function open() {
  modal.classList.add("active");
  // console.log('hi')
}
