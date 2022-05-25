let modal = document.querySelector("#ismodal");
let momodal = document.querySelector("#mo-modal");
let outmodal = document.querySelector("#out-modal");

momodal.addEventListener("click", open);
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
