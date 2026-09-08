import { scheduleCancel } from "../../services/schedule-cancel.js"
import { schedulesDay } from "./load.js"

// Seleciona todas as listas de agendamentos (manhã, tarde e noite)
const periods = document.querySelectorAll(".schedule-list")

periods.forEach((period) => {
  period.addEventListener("click", async (event) => {
    // Verifica se o elemento clicado é o botão de remover
    if (event.target.classList.contains("btn-remove")) {
      // Obtém o item pai (li) que contém o atributo data-id com o ID do agendamento
      const item = event.target.closest(".schedule-item")
      const id = item.getAttribute("data-id")

      if (id) {
        const isConfirm = confirm("Tem certeza que deseja cancelar este agendamento?")

        if (isConfirm) {
          // Faz a requisição para cancelar na API
          await scheduleCancel({ id })

          // Recarrega os agendamentos do dia na tela
          await schedulesDay()
        }
      }
    }
  })
})