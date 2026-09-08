
const modal = document.getElementById("modal-new-schedule")
const btnOpen = document.getElementById("btn-new-schedule")
const btnClose = document.querySelector(".btn-close-modal")

// Abre o modal
btnOpen.addEventListener("click", () => {
  modal.classList.remove("hidden")
})

// Fecha o modal pelo botão X
btnClose.addEventListener("click", () => {
  modal.classList.add("hidden")
})