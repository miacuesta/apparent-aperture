const input = document.getElementById("taskInput")
const button = document.getElementById("addBtn")
const list = document.getElementById("taskList")

// agregar tarea
button.addEventListener("click", () => {

  if(input.value.trim() === "") return

  const li = document.createElement("li")
li.style.opacity = "0"
li.style.transform = "translateY(10px)"
  li.textContent = input.value

  list.appendChild(li)

  setTimeout(() => {
    li.style.transition = "all 0.3s ease"
    li.style.opacity = "1"
    li.style.transform = "translateY(0)"
  }, 10)

  input.value = ""

})

// MENU
const menuBtn = document.getElementById("menuBtn")
const sideMenu = document.getElementById("sideMenu")
const clearBtn = document.getElementById("clearBtn")
const completeAllBtn = document.getElementById("completeAllBtn")

// abrir/cerrar menú
menuBtn.addEventListener("click", () => {
  sideMenu.classList.toggle("open")
})

// borrar tareas
clearBtn.addEventListener("click", () => {
  list.innerHTML = ""
})

// marcar todas como hechas
completeAllBtn.addEventListener("click", () => {

  const items = document.querySelectorAll("#taskList li")

  items.forEach(item => {
    item.style.textDecoration = "line-through"
  })

  const darkModeBtn = document.getElementById("darkModeBtn")

darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark")
})

if(input.value.trim() === "") return

input.addEventListener("keypress", (e) => {
  if(e.key === "Enter"){
    button.click()
  }
})

})