import React from "react";

const TaskCard = ({ task, onToggleComplete }) => {
  return (
    <div className="task-card">
      <div className="task-info">
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <p><strong>Due Date:</strong> {task.dueDate}</p>
        <p><strong>Status:</strong> {task.completed ? 'Completed' : 'Pending'}</p>
      </div>
      <div className="task-actions">
        <button onClick={() => onToggleComplete(task.id)}>
          {task.completed ? 'Needs Completing' : 'Completed'}
        </button>
      </div>
    </div>
  );
};

export default TaskCard;


