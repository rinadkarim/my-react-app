import React, { useState, useEffect } from "react";
import TaskCard from "./TaskCard";
import { Link, useParams } from "react-router-dom";

const TaskList = () => {
  const { filter } = useParams();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/tasks")
      .then((response) => response.json())
      .then((data) => {
        setTasks(data);
      })
      .catch((err) => console.error("Error fetching tasks:", err));
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

    const taskToUpdate = tasks.find((task) => task.id === taskId);
    fetch(`http://localhost:5000/tasks/${taskId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: !taskToUpdate.completed }),
    })
      .then((response) => response.json())
      .catch((err) => console.error("Error updating task:", err));
  };

  return (
    <div>
      <div className="nav-buttons">
        <Link to="/tasks/all">
          <button>All</button>
        </Link>
        <Link to="/tasks/completed">
          <button>Completed</button>
        </Link>
        <Link to="/tasks/pending">
          <button>Pending</button>
        </Link>
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







