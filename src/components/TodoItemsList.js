import TodoItems from "./TodoItems"

function TodoItemsList(info, onChange, deleteItem, toggleEditForm, onEdit) {
  const todoItemsList = document.createElement("ul")
  todoItemsList.className = "todo_items-list"
  info.forEach((item) => {
    todoItemsList.appendChild(
      TodoItems(item, onChange, deleteItem, toggleEditForm, onEdit)
    )
  })
  return todoItemsList
}

export default TodoItemsList
