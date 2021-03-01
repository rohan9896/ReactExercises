import { useState } from "react";
import "./styles.css";

export default function App() {
  const [val, setVal] = useState("");
  const [todos, setTodos] = useState([
    {
      title: "do this 1",
      completed: false
    },
    {
      title: "do this 2",
      completed: false
    },
    {
      title: "do this 3",
      completed: false
    }
  ]);

  function addTodo() {
    let prevArr = [...todos];
    prevArr.push({
      title: val,
      completed: false
    });
    setTodos(prevArr);
    setVal("");
  }

  function completeFun(key) {
    let prevArr = [...todos];
    prevArr.map((todo, index) => {
      if (key === index) {
        let newObj = {
          title: todo.title,
          completed: !todo.completed
        };
        prevArr[index] = newObj;
      }
    });
    setTodos(prevArr);
  }

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <input
        value={val}
        onChange={(event) => setVal(event.target.value)}
        type="text"
      />
      <button onClick={addTodo}>Add Todo</button>
      {console.log(todos)}
      <ul>
        {todos.map((todo, index) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
                listStyle: "none"
              }}
            >
              <input onChange={() => completeFun(index)} type="checkbox" />
              <li
                style={{
                  textDecoration: todo.completed ? "line-through" : "none"
                }}
              >
                {todo.title}
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
