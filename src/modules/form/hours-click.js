export function hoursClick() {
  const hours = document.querySelectorAll(".hour-available")

  hours.forEach((availableHour) => {
    availableHour.addEventListener("click", (selected) => {
      // Remove a classe 'selected' de todos e adiciona apenas no clicado
      hours.forEach((hour) => {
        hour.classList.remove("selected")
      })

      selected.target.classList.add("selected")
    })
  })
}