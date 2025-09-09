import { checkIcon, recycleIcon } from "../assets/icons/icons"

function TodoToolbar(checkAllItems, deleteAllItems, allItemsIsChecked) {
  const todoToolBar = document.createElement("div")
  todoToolBar.className = "todo-toolbar"
  todoToolBar.innerHTML = /* html */ `
    <label class="label">
      <input class="check-input" type="checkbox" ${
        allItemsIsChecked ? "checked" : ""
      }/>
      <span class="custom-checkbox">${checkIcon}</span>
    </label>
    <button class="delete_all-btn">
      ${recycleIcon}
    </button>`
  const input = todoToolBar.querySelector(".check-input")
  const deleteAllItemsBtn = todoToolBar.querySelector(".delete_all-btn")
  input.addEventListener("change", checkAllItems)
  deleteAllItemsBtn.addEventListener("click", deleteAllItems)
  return todoToolBar
}

export default TodoToolbar
