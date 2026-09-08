import dayjs from "dayjs"
import { schedulesDay  } from "./schedules/load.js"

document.addEventListener("DOMContentLoaded", function () {
  // Define a data atual no input
  const currentDate = document.getElementById("schedule-date")
  const today = dayjs().format("YYYY-MM-DD")
  currentDate.value = today

  // Carrega os agendamentos do dia atual
  schedulesDay()
})