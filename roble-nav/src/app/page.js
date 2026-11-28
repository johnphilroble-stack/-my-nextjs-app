
"use client";

import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  function addTask() {
    if (task.trim() === "") return;

    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  }

  function completeTask(index) {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  }

  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  return (
    <main style={{
      maxWidth: "500px",
      margin: "60px auto",
      padding: "25px",
      fontFamily: "Arial",
      backgroundColor: "#ffffff",
      borderRadius: "12px",
      boxShadow: "0 2px 10px #cccccc"
    }}>

      <h1 style={{ textAlign: "center", color: "#16a34a" }}>
        My Daily Task Manager
      </h1>

      <p style={{ textAlign: "center", color: "#555" }}>
        Keep track of your daily activities!
      </p>

      <div style={{ display: "flex", gap: "10px" }}>
        <input
          type="text"
          placeholder="Enter a new activity..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={{
            flex: 1,
            padding: "12px",
            border: "1px solid #ccc",
            borderRadius: "6px"
          }}
        />

        <button onClick={addTask} style={{
          padding: "12px",
          backgroundColor: "#16a34a",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}>
          Add Task
        </button>
      </div>

      <ul style={{ padding: 0, listStyle: "none" }}>
        {tasks.length === 0 ? (
          <p style={{ textAlign: "center", color: "#888" }}>
            No activities yet. Add your first task!
          </p>
        ) : (
          tasks.map((item, index) => (
            <li key={index} style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "12px",
              marginTop: "10px",
              backgroundColor: "#f0fdf4",
              borderRadius: "6px"
            }}>

              <span
                onClick={() => completeTask(index)}
                style={{
                  cursor: "pointer",
                  textDecoration: item.completed
                    ? "line-through"
                    : "none",
                  color: item.completed ? "#888" : "#222"
                }}
              >
                {item.text}
              </span>

              <button onClick={() => deleteTask(index)} style={{
                backgroundColor: "#dc2626",
                color: "white",
                border: "none",
                padding: "7px 10px",
                borderRadius: "5px",
                cursor: "pointer"
              }}>
                Remove
              </button>

            </li>
          ))
        )}
      </ul>

      <p style={{ textAlign: "center", color: "#666" }}>
        Total Tasks: {tasks.length}
      </p>

      <p style={{ textAlign: "center", color: "#16a34a" }}>
        Completed Tasks: {tasks.filter(item => item.completed).length}
      </p>

    </main>
  );
}
