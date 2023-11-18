import { useState } from "react";

export default function TodoList() {
  const [activity, setActivity] = useState("");
  const [update, setUpdate] = useState({});
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState("");
  function generateId() {
    return Date.now();
  }
  function updateTodoHandler(todo) {
    console.log(todo);
    setActivity(todo.activity);
    setUpdate(todo);
  }
  function saveTodoHandler(event) {
    event.preventDefault();
    if (!activity) {
      return setMessage("Activities cannot be empty");
    }
    if (update.id) {
      const updateTodo = {
        ...update,
        activity,
      };
      const findTodoIndex = todos.findIndex((todo) => todo.id == update.id);
      const updateTodos = [...todos];
      updateTodos[findTodoIndex] = updateTodo;
      setTodos(updateTodos);
      return cancelUpdateHandler();
    }
    const newData = { id: generateId(), activity, done: false };
    setTodos([...todos, newData]);
    setActivity("");
    setMessage("");
  }
  function deleteTodoHandler(id) {
    const findData = todos.filter((todo) => todo.id !== id);
    setTodos(findData);
    if (update.id) {
      cancelUpdateHandler();
    }
  }
  function cancelUpdateHandler() {
    setUpdate({});
    setActivity("");
  }
  function doneTodoHandler(todo) {
    // console.log(todo);
    const updateTodo = {
      ...todo,
      done: todo.done ? false : true,
    };
    const findTodoIndex = todos.findIndex(
      (currentTodo) => currentTodo.id == todo.id
    );
    const updateTodos = [...todos];
    updateTodos[findTodoIndex] = updateTodo;
    setTodos(updateTodos);
    console.log(updateTodo);
  }

  return (
    <>
      <h1>Simple Todo</h1>
      {message && <div style={{ color: "red" }}>{message}</div>}
      <form action="" onSubmit={saveTodoHandler}>
        <input
          type="text"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button type="submit">{update.id ? "Save" : "Add"}</button>
        {update.id && (
          <button type="submit" onClick={cancelUpdateHandler}>
            Cancel
          </button>
        )}
      </form>
      {todos.length > 0 ? (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => doneTodoHandler(todo)}
              />
              ({todo.done ? "done" : "not finished yet"}){todo.activity}{" "}
              <button onClick={() => deleteTodoHandler(todo.id)}>Delete</button>
              <button onClick={() => updateTodoHandler(todo)}>Update</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>
          <i>Data is still empty</i>
        </p>
      )}
    </>
  );
}
