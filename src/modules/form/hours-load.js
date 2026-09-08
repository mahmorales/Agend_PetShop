import dayjs from "dayjs"
import { openingHours } from "../../utils/opening-hours.js"
import { hoursClick } from "./hours-click.js"

const hours = document.getElementById("hours")

export function hoursLoad({ date, dailySchedules }) {
  // Limpa a lista de horários
  hours.innerHTML = ""

  // Garante que dailySchedules seja um array seguro para evitar erros
  const schedules = dailySchedules || []

  // Obtém a lista de horários que já estão ocupados
  const unavailableHours = schedules.map((schedule) => 
    dayjs(schedule.when).format("HH:mm")
  )

  openingHours.forEach((openingHour) => {
    // Recupera somente a hora e converte para número
    const [hour] = openingHour.split(":")

    // Verifica se o horário já passou ou se já está ocupado
    const isHourPast = dayjs(date).add(Number(hour), "hour").isBefore(dayjs())
    const isUnavailable = unavailableHours.includes(openingHour) || isHourPast

    // Renderiza o item de horário na tela
    const li = document.createElement("li")
    li.classList.add("hour")
    li.classList.add(isUnavailable ? "hour-unavailable" : "hour-available")
    li.textContent = openingHour

    if (!isUnavailable) {
      li.addEventListener("click", hoursClick)
    }

    hours.appendChild(li)
  })

  // Adiciona o evento de clique nos horários disponíveis
  hoursClick()
}