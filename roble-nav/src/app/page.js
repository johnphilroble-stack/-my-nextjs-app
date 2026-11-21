
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

      <h1 style={{ textAlign: "center", color: "#2563eb" }}>
        My To-Do List
      </h1>

      <p style={{ textAlign: "center", color: "#555" }}>
        Organize your daily tasks!
      </p>

      <div style={{ display: "flex", gap: "10px" }}>
        <input
          type="text"
          placeholder="Enter your task..."
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
          backgroundColor: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}>
          Add
        </button>
      </div>

      <ul style={{ padding: 0, listStyle: "none" }}>
        {tasks.map((item, index) => (
          <li key={index} style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "12px",
            marginTop: "10px",
            backgroundColor: "#f3f4f6",
            borderRadius: "6px"
          }}>

            <span
              onClick={() => completeTask(index)}
              style={{
                cursor: "pointer",
                textDecoration: item.completed
                  ? "line-through"
                  : "none"
              }}
            >
              {item.text}
            </span>

            <button onClick={() => deleteTask(index)} style={{
              backgroundColor: "#ef4444",
              color: "white",
              border: "none",
              padding: "7px 10px",
              borderRadius: "5px",
              cursor: "pointer"
            }}>
              Delete
            </button>

          </li>
        ))}
      </ul>

      <p style={{ textAlign: "center", color: "#666" }}>
        Total Tasks: {tasks.length}
      </p>

    </main>
  );
}
