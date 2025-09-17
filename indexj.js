//selecting DOM element
const input = document.getElementById("input")
const add = document.getElementById("add")
const list = document.getElementById("list")


//adding the task
add.addEventListener("click", function (){

if(input.value === ""){
    alert("Write Down Something")
    return
   }

  const task = document.createElement("li")
  task.textContent = input.value
  list.append(task)

   input.value = ""
   savetask()

   

  const delet = document.createElement("button")
  delet.className = "delett"
  delet.textContent = "Delete"
  task.appendChild(delet)

  delet.addEventListener("click", function(){
     task.remove()
     savetask()

  })
 
})

// saving task to localStorage
function savetask() {
  let tasks = []
  list.querySelectorAll("li").forEach(function(item){
    tasks.push(item.textContent.replace("Delete", "").trim())
  })
  localStorage.setItem("tasks", JSON.stringify(tasks))
  
}

// loading task 
window.addEventListener("load", function(){
  const saved = JSON.parse(localStorage.getItem("tasks")) || []
  saved.forEach(function(taskText){
    const task = document.createElement("li")
    task.textContent = taskText
    list.append(task)


    const delet = document.createElement("button")
    delet.className = "delett"
    delet.textContent = "Delete"
    task.appendChild(delet)

     delet.addEventListener("click", function(){
     task.remove()
     savetask()

  })
  })
})

