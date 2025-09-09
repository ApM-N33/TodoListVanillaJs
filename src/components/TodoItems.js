import { checkIcon, deleteIcon, editIcon } from "../assets/icons/icons"
function TodoItems(item, onChange, deleteItem, toggleEditForm, onEdit) {
  const todoItem = document.createElement("li")
  todoItem.className = "list-item"
  todoItem.innerHTML = /* html */ `
    <label class="list_item-label">
      <input class="check-input" type="checkbox" ${
        item.isCompleted ? "checked" : ""
      }/>
      <span class="custom-checkbox">
        ${checkIcon}
      </span>
      ${item.label}
    </label>
    <div class='btns-wrap'>
      <button class="edit-btn">${editIcon}</button>
      <button class="delete-btn">${deleteIcon}</button>
    </div>
    <form class="edit-form ${item.editFormIsActive ? "active" : ""}">
      <input class="edit-input" type="text" />
      <button class="replace-btn" type="submit">Edit</button>
    </form>`
  const checkInput = todoItem.querySelector(".check-input")
  const deleteBtn = todoItem.querySelector(".delete-btn")
  const editBtn = todoItem.querySelector(".edit-btn")
  const editForm = todoItem.querySelector(".edit-form")
  const editInput = todoItem.querySelector(".edit-input")
  checkInput.addEventListener("change", (e) => onChange(e, item))
  deleteBtn.addEventListener("click", () => deleteItem(item))
  editBtn.addEventListener("click", () => toggleEditForm(item))
  editForm.addEventListener("submit", (e) => onEdit(e, editInput.value, item))
  return todoItem
}

export default TodoItems
