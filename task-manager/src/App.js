import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [completed, setCompleted] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    const confirm = window.confirm("Is this task completed?");
    if (confirm) {
      const completedTask = tasks[index];
      setCompleted([completedTask, ...completed]); // add to top
      setTasks(tasks.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="main-box">
      <h1 className="title">📝 To-Do List</h1>

      <div className="input-section">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter your task..."
          className="input-box"
        />
        <button onClick={addTask} className="add-btn">
          Add
        </button>
      </div>

      <div className="grid">
        <div className="section pending">
          <h2 className="section-title">⏳ Pending</h2>
          {tasks.map((t, index) => (
            <div key={index} className="task-item">
              <span>{t}</span>
              <button onClick={() => deleteTask(index)} className="delete-btn">
                ✖
              </button>
            </div>
          ))}
        </div>

        <div className="section completed">
          <h2 className="section-title">✅ Completed</h2>
          {completed.map((t, index) => (
            <div key={index} className="task-item">
              <span>{t}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

