import { schedulesDay } from "../schedules/load.js"

const selectedDate = document.getElementById("schedule-date")

selectedDate.addEventListener("change", () => {
  schedulesDay()
})