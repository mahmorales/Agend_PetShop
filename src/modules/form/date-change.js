import { schedulesDay } from "../schedules/load.js"

// Seleciona os dois inputs de data (o da tela principal e o do modal)
const scheduleDate = document.getElementById("schedule-date")
const modalDate = document.getElementById("date")

// Quando alterar a data na página principal, sincroniza com o modal
scheduleDate.addEventListener("change", (e) => {
  modalDate.value = e.target.value
  schedulesDay()
})

// Quando alterar a data dentro do modal, sincroniza com a página principal
modalDate.addEventListener("change", (e) => {
  scheduleDate.value = e.target.value
  schedulesDay()
})