import dayjs from "dayjs"
import { scheduleNew } from "../../services/schedule-new.js"
import { schedulesDay } from "../schedules/load.js"

const form = document.querySelector("form")
const clientName = document.getElementById("tutor") // Corrigido para bater com seu HTML
const petName = document.getElementById("pet")
const phone = document.getElementById("phone")
const serviceDescription = document.getElementById("service") // Capturando o serviço
const selectedDate = document.getElementById("date") // Data do modal

form.addEventListener("submit", async (event) => {
  event.preventDefault()

  try {
    // Recupera os valores preenchidos
    const name = clientName.value.trim()
    const pet = petName.value.trim()
    const phoneValue = phone.value.trim()
    const service = serviceDescription.value.trim()

    if (!name || !pet || !phoneValue || !service) {
      return alert("Preencha todos os campos do formulário!")
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

    // Faz o envio para a API (agora enviando o service junto)
    await scheduleNew({
      id,
      name,
      pet,
      phone: phoneValue,
      service, 
      when,
    })

    // Recarrega os agendamentos do dia, limpa o form e fecha o modal
    await schedulesDay()
    form.reset()
    document.getElementById("modal-new-schedule").classList.add("hidden")
    
  } catch (error) {
    console.log(error)
    alert("Não foi possível realizar o agendamento.")
  }
})