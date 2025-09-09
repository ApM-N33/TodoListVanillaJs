import TodoFooter from "./components/TodoFooter"
import TodoForm from "./components/TodoForm"
import TodoItemsList from "./components/TodoItemsList"
import TodoTitle from "./components/TodoTitle"
import TodoToolbar from "./components/TodoToolbar"

// ////////////// TODO APP //////////////////////////////

function App() {
  let info = JSON.parse(localStorage.getItem("TODO")) || [
    { id: Math.random(), isCompleted: false, label: "Learn React" },
    { id: Math.random(), isCompleted: false, label: "Learn Next" },
    { id: Math.random(), isCompleted: false, label: "Learn Java" },
  ]
  let allItemsIsChecked
  const App = document.createElement("div")
  App.className = "app-container"
  const render = () => {
    App.innerHTML = ""
    App.appendChild(TodoTitle())
    App.appendChild(
      TodoForm((e, val) => {
        e.preventDefault()
        const isValid = /^[a-zA-Z0-9 +]+$/.test(val.trim())
        if (isValid) {
          info = [
            ...info,
            {
              id: Math.random(),
              isCompleted: false,
              editFormIsActive: false,
              label: val.trim(),
            },
          ]
        }
        render()
        App.querySelector(".input").focus()
      })
    )
    App.appendChild(
      TodoToolbar(
        (e) => {
          allItemsIsChecked = e.target.checked
          info = info.map((item) => ({
            ...item,
            isCompleted: allItemsIsChecked,
          }))
          render()
        },
        () => {
          if (
            allItemsIsChecked ||
            info.every((item) => item.isCompleted === true)
          ) {
            info = []
            allItemsIsChecked = false
          }
          render()
        },
        allItemsIsChecked
      )
    )
    App.appendChild(
      TodoItemsList(
        info,
        (e, item) => {
          info = info.map((it) => {
            return item.id === it.id
              ? { ...it, isCompleted: e.target.checked }
              : it
          })
          const scrollPosition = App.querySelector(".todo_items-list").scrollTop
          render()
          App.querySelector(".todo_items-list").scrollTop = scrollPosition
        },
        (item) => {
          info = info.filter((it) => item.id !== it.id)
          render()
        },
        (item) => {
          info = info.map((it) => ({
            ...it,
            editFormIsActive: it.id === item.id && !it.editFormIsActive,
          }))
          const scrollPosition = App.querySelector(".todo_items-list").scrollTop
          render()
          App.querySelector(".todo_items-list").scrollTop = scrollPosition
        },
        (e, val, item) => {
          e.preventDefault()
          const isValid = /^[a-zA-Z0-9 +]+$/.test(val.trim())
          if (isValid) {
            info = info.map((it) => {
              return item.id === it.id ? { ...it, label: val.trim() } : it
            })
          }
          render()
          App.querySelectorAll(".edit-input").forEach((editInput) => {
            editInput.focus()
          })
        }
      )
    )
    App.appendChild(
      TodoFooter(
        info,
        info.filter((item) => item.isCompleted === true).length,
        () => {
          info = info.filter((item) => item.isCompleted === false)
          allItemsIsChecked = false
          render()
        }
      )
    )
    localStorage.setItem("TODO", JSON.stringify(info))
  }
  render()
  return App
}

export default App
