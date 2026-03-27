document.addEventListener("DOMContentLoaded", () => {

  const input = document.getElementById("taskInput")
  const button = document.getElementById("addBtn")
  const list = document.getElementById("taskList")
  
  // agregar tarea
  button.addEventListener("click", () => {
  
    if(input.value.trim() === "") return
  
    const li = document.createElement("li")
li.textContent = input.value

// animación inicial
li.style.opacity = "0"
li.style.transform = "translateY(10px)"

// 👉 CLICK = marcar/desmarcar
li.addEventListener("click", () => {
  li.classList.toggle("completed")
})

// 👉 DOBLE CLICK = borrar
li.addEventListener("dblclick", () => {
  li.style.transition = "all 0.2s"
  li.style.opacity = "0"
  li.style.transform = "translateX(50px)"

  setTimeout(() => {
    li.remove()
  }, 200)
})
  
   
    list.appendChild(li)
  
    setTimeout(() => {
      li.style.transition = "all 0.3s"
      li.style.opacity = "1"
      li.style.transform = "translateY(0)"
    }, 10)
  
    input.value = ""
  
  })
  
  // ENTER
  input.addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
      button.click()
    }
  })
  
  // MENU
  const menuBtn = document.getElementById("menuBtn")
  const sideMenu = document.getElementById("sideMenu")
  
  menuBtn.addEventListener("click", () => {
    sideMenu.classList.toggle("open")
  })
  
  // DARK MODE
  const darkModeBtn = document.getElementById("darkModeBtn")
  
  darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark")
  })
  
  // BORRAR
  const clearBtn = document.getElementById("clearBtn")
  
  clearBtn.addEventListener("click", () => {
    list.innerHTML = ""
  })
  
  // COMPLETAR
  const completeAllBtn = document.getElementById("completeAllBtn")
  
  completeAllBtn.addEventListener("click", () => {
    const items = document.querySelectorAll("#taskList li")
  
    items.forEach(item => {
      item.style.textDecoration = "line-through"
    })
  })
  
  })