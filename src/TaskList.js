import React, { useState, useEffect } from "react";
import TaskCard from "./TaskCard";
import { useParams } from "react-router-dom";

const TaskList = () => {
  const { filter } = useParams();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/tasks")
      .then((response) => response.json())
      .then((data) => {
        setTasks(data);
      });
  }, []);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  const handleToggleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    fetch(`http://localhost:5000/tasks/${taskId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: !tasks.completed }),
    });
  };

  return (
    <div>
      <div className="nav-buttons">
        <button>
          <a href="/tasks/all">All</a>
        </button>
        <button>
          <a href="/tasks/completed">Completed</a>
        </button>
        <button>
          <a href="/tasks/pending">Pending</a>
        </button>
      </div>

      <div className="task-list">
        {filteredTasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onToggleComplete={handleToggleComplete}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;






