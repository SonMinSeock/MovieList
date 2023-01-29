const modalBox = document.querySelector("#modal-box");
const modal = document.querySelector("#modal");
const modalCloseButton = document.querySelector("#modal button");

function onModalClose() {
  modalBox.style.display = "none";
  console.log("click");
  getMovies();
}

modalCloseButton.addEventListener("click", onModalClose);
