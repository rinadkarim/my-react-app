import React from "react";
import { Link, useParams } from "react-router-dom";
import TaskCard from "./TaskCard";

const TaskList = ({ tasks }) => {
  const { filter } = useParams();

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "todo") return !task.completed;
    return true;
  });

  const handleToggleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );

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








