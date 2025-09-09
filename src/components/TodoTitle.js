function TodoTitle() {
  const todoTitle = document.createElement("h1")
  todoTitle.textContent = "📓 Notepad"
  todoTitle.className = "todo-title"
  return todoTitle
}

export default TodoTitle
