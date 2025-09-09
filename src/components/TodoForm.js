function TodoForm(handleAdd) {
  const todoForm = document.createElement("form")
  todoForm.className = "todo-form"
  todoForm.innerHTML = /* html */ `
    <input class="input" type="text" placeholder="Add your task..."/>
    <button type="submit" class="add-btn">
      <span class="plus-icon">+</span>
    </button>`
  todoForm.addEventListener("submit", (e) => {
    handleAdd(e, todoForm.querySelector(".input").value)
  })
  return todoForm
}

export default TodoForm
