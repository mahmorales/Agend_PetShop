import { apiConfig } from "./api-config"
import dayjs from "dayjs"

export async function scheduleFetchByDay({ date }) {
  try {
    // Faz a requisição para buscar os agendamentos da data
    const response = await fetch(`${apiConfig.baseURL}/schedules`)
    
    // Converte a resposta para JSON
    const data = await response.json()

    // Filtra os agendamentos para retornar apenas os do dia selecionado
    const dailySchedules = data.filter((schedule) => 
      dayjs(date).isSame(schedule.when, "day")
    )

    return dailySchedules
  } catch (error) {
    console.log(error)
    alert("Não foi possível carregar os agendamentos do dia.")
  }
}