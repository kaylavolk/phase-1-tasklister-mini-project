const main = document.querySelector("main-content")
console.log(main)

const taskForm = document.querySelector("#create-task-form")
const taskList = document.querySelector("#tasks")
taskForm.addEventListener("submit", function(e){
  e.preventDefault()
  // user input
const newTask = document.querySelector("#new-task-description").value
// slap it on the DOM

taskList.innerHTML += `
<li> ${newTask}
<button data-action="delete"> X </button>
 </li>

 ` 
// const taskItem = document.createElement("li")
// taskItem.innerText = newTask
// taskList.appendChild(taskItem)
taskForm.reset()
})

taskList.addEventListener("click", function(e){
  if (e.target.dataset.action === "delete"){
    e.target.parentElement.remove()
  }
})