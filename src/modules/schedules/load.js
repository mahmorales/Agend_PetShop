import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import { scheduleShow } from "./show.js"
import { hoursLoad } from "../form/hours-load.js"

// Seleciona o input de data no topo da nossa página do PetShop
const selectedDate = document.getElementById("schedule-date")

export async function schedulesDay() {
  // Obtém a data do input
  const date = selectedDate.value

  // Busca na API os agendamentos daquele dia
  const dailySchedules = await scheduleFetchByDay({ date })
  
  // Exibe os agendamentos na lista da direita
  scheduleShow({ dailySchedules })

  // Renderiza as horas disponíveis para o formulário
  hoursLoad({ date, dailySchedules })
}