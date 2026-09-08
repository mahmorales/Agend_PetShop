import dayjs from "dayjs"
import { scheduleNew } from "../../services/schedule-new.js"
import { schedulesDay } from "../schedules/load.js"

const form = document.querySelector("form")
const clientName = document.getElementById("name") // Ajuste o ID conforme o seu HTML do input de nome do tutor
const petName = document.getElementById("pet")     // Ajuste o ID conforme o seu HTML do input de nome do pet
const phone = document.getElementById("phone")     // Ajuste o ID conforme o seu HTML do input de telefone
const selectedDate = document.getElementById("schedule-date")

// Data atual para validação mínima
const today = dayjs(new Date()).format("YYYY-MM-DD")
selectedDate.value = today
selectedDate.min = today

form.addEventListener("submit", async (event) => {
  event.preventDefault()

  try {
    // Recupera o nome do cliente, pet e telefone
    const name = clientName.value.trim()
    const pet = petName.value.trim()
    const phoneValue = phone.value.trim()

    if (!name || !pet || !phoneValue) {
      return alert("Preencha todos os campos do cliente e do pet!")
    }

    // Recupera o horário selecionado
    const hourSelected = document.querySelector(".hour.selected")

    if (!hourSelected) {
      return alert("Selecione um horário para o atendimento.")
    }

    const [hour] = hourSelected.innerText.split(":")

    // Insere a hora na data selecionada
    const when = dayjs(selectedDate.value).add(hour, "hour").toDate()

    // Gera um ID único baseado no timestamp atual
    const id = new Date().getTime().toString()

    // Faz o envio para a API
    await scheduleNew({
      id,
      name,
      pet,
      phone: phoneValue,
      when,
    })

    // Recarrega os agendamentos do dia e limpa o formulário
    await schedulesDay()
    form.reset()
    
  } catch (error) {
    console.log(error)
    alert("Não foi possível realizar o agendamento.")
  }
})