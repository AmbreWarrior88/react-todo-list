import React, { useState } from "react";

import "./App.css";

const App = () => {
  // State to save user input
  const [taskInput, setTaskInput] = useState("");

  // State to save the tasks
  const [tasks, setTasks] = useState([]);

  const Task = (task, index) => {
    return (
      <li className="task">
        <span
          onClick={() => {
            const newTasks = [...tasks];
            newTasks.splice(index, 1);
            setTasks(newTasks);
          }}
        >
          𝘟{" "}
        </span>
        <span
          className={task.isDone === true ? "done" : ""}
          onClick={() => {
            const newTasks = [...tasks];
            newTasks[index].isDone = !newTasks[index].isDone;

            setTasks(newTasks);
          }}
        >
          {task.name}
        </span>
      </li>
    );
  };

  return (
    <div>
      <h1>To-Do list</h1>
      <ul>{tasks.map(Task)}</ul>

      <form
        className="to-do"
        onSubmit={event => {
          event.preventDefault();
          const newTasks = [...tasks];
          newTasks.push({ name: taskInput, isDone: false });
          setTasks(newTasks);
          setTaskInput("");
        }}
      >
        <input
          id="to-do-input"
          className="task-input"
          type="text"
          placeholder="Titre"
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
