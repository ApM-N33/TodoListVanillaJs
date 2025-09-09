function TodoFooter(info, completed, clearCompleted) {
  const todoFooter = document.createElement("div")
  todoFooter.className = "todo-footer"
  todoFooter.innerHTML = /* html */ `
    <button class="clear-btn">
      <span>Clear Completed</span>
      <span>${completed}/${info.length}</span>
    </button>`
  const clearCompletedBtn = todoFooter.querySelector(".clear-btn")
  clearCompletedBtn.addEventListener("click", clearCompleted)
  return todoFooter
}

export default TodoFooter
