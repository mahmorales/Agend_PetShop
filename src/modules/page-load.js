import dayjs from "dayjs"
import { schedulesDay } from "./schedules/load.js"

document.addEventListener("DOMContentLoaded", function () {
  const today = dayjs().format("YYYY-MM-DD")
  
  // Define a data atual nos dois inputs (topo da página e dentro do modal)
  document.getElementById("schedule-date").value = today
  document.getElementById("date").value = today

  // Carrega os agendamentos do dia atual
  schedulesDay()
})