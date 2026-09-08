import dayjs from "dayjs"

// Seleciona as seções de manhã, tarde e noite
const periodMorning = document.getElementById("morning")
const periodAfternoon = document.getElementById("afternoon")
const periodEvening = document.getElementById("evening")

export function scheduleShow({ dailySchedules }) {
  try {
    // Limpa as listas antes de renderizar
    periodMorning.querySelector(".schedule-list").innerHTML = ""
    periodAfternoon.querySelector(".schedule-list").innerHTML = ""
    periodEvening.querySelector(".schedule-list").innerHTML = ""

    // Itera sobre cada agendamento
    dailySchedules.forEach((schedule) => {
      const item = document.createElement("li")
      item.classList.add("schedule-item")
      item.setAttribute("data-id", schedule.id)

      const time = document.createElement("span")
      time.classList.add("time")
      time.textContent = dayjs(schedule.when).format("HH:mm")

      const clientInfo = document.createElement("div")
      clientInfo.classList.add("client-info")

      const petName = document.createElement("strong")
      petName.textContent = schedule.pet

      const tutorName = document.createElement("span")
      tutorName.textContent = ` / ${schedule.name}`

      clientInfo.append(petName, tutorName)

      const service = document.createElement("span")
      service.classList.add("service")
      service.textContent = schedule.service || schedule.description // Ajuste para a descrição do serviço

      const cancelBtn = document.createElement("button")
      cancelBtn.classList.add("btn-remove")
      cancelBtn.textContent = "Remover agendamento"

      item.append(time, clientInfo, service, cancelBtn)

      // Obtém a hora para separar nos períodos do dia
      const hour = dayjs(schedule.when).hour()

      if (hour <= 12) {
        periodMorning.querySelector(".schedule-list").appendChild(item)
      } else if (hour > 12 && hour <= 18) {
        periodAfternoon.querySelector(".schedule-list").appendChild(item)
      } else {
        periodEvening.querySelector(".schedule-list").appendChild(item)
      }
    })
  } catch (error) {
    console.log(error)
    alert("Não foi possível exibir os agendamentos.")
  }
}