// import packages and stylesheet
import React, { useState } from "react";
import "./App.css";

// import icons
import list from "./assets/list-ul-solid.svg";
import bin from "./assets/trash-solid.svg";

function App() {
  // create states for tasks and input
  const [tasks, setTasks] = useState([]);
  const [todo, setTodo] = useState("");

  return (
    <>
      <header>
        <ul className="wrapper">
          <li>
            <img src={list} alt="icon-list" />
          </li>
          <li>
            <h1>Todo List</h1>
          </li>
        </ul>
      </header>
      <main>
        <content>
          <ul>
            {/* display all tasks from state */}
            {tasks.map((task, index) => {
              return (
                <li key={index}>
                  {/* handle checkbox and strike todo */}
                  <input
                    type="checkbox"
                    checked={tasks[index].strike && "checked"}
                    onClick={() => {
                      const newTasks = [...tasks];
                      newTasks[index].strike = !newTasks[index].strike;
                      setTasks(newTasks);
                    }}
                  />
                  <p className={tasks[index].strike ? "strike" : null}>
                    {tasks[index].todo}
                  </p>
                  {/* handle todo deletion */}
                  <img
                    src={bin}
                    alt="icon-bin"
                    onClick={() => {
                      const delTasks = [...tasks];
                      delTasks.splice(index, 1);
                      setTasks(delTasks);
                    }}
                  />
                </li>
              );
            })}
          </ul>
        </content>
        <section>
          {/* handle task input */}
          <input
            type="text"
            placeholder="new task"
            value={todo}
            onChange={event => {
              setTodo(event.target.value);
            }}
          />
          {/* handle task save to todo state */}
          <button
            onClick={() => {
              const newTasks = [...tasks];
              newTasks.push({ todo: todo, strike: false });
              setTasks(newTasks);
              setTodo("");
            }}
          >
            Add task
          </button>
        </section>
      </main>
      <footer>
        <span>
          Made with
          <a href="https://reactjs.org" target="_blank">
            {" "}
            React{" "}
          </a>
          at
          <a href="https://www.lereacteur.io" target="_blank">
            {" "}
            Le Reacteur{" "}
          </a>
          by
          <a href="https://www.linkedin.com/in/sebastienkempf/" target="_blank">
            {" "}
            Seb
          </a>
        </span>
      </footer>
    </>
  );
}

export default App;
