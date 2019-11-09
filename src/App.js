import React, { useState } from "react";

import "./App.css";

const App = () => {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <h1>To-Do list</h1>
      <form
        className="to-do"
        onSubmit={event => {
          event.preventDefault();
          const newTasks = [...tasks];
          newTasks.push(taskInput);
          setTasks(newTasks);
        }}
      >
        {tasks.map((element, index) => {
          return (
            <div className="task">
              <span>
                <button
                  onClick={event => {
                    event.preventDefault();

                    // Tentative pour récupérer l'élément du tableau correspondant à la croix cliquée (ne fonctionne pas):
                    tasks.splice({ index }, 1);
                  }}
                >
                  ✕
                </button>
              </span>

              <span key={index}>{element}</span>
            </div>
          );
        })}
        <input
          id="to-do-input"
          className="task-input"
          type="text"
          value={taskInput}
          onChange={event => {
            setTaskInput(event.target.value);
          }}
        />

        <br></br>
        <input className="submit" type="submit" value="Ajouter une tâche" />
      </form>
    </div>
  );
};

export default App;
