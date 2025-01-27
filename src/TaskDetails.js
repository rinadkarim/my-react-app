import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const TaskDetails = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/tasks/${id}`)
      .then((response) => response.json())
      .then((data) => setTask(data));
  }, [id]);

  if (!task) return <p>Loading task details...</p>;

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>Due Date: {task.dueDate}</p>
      <p>Status: {task.completed ? "Completed" : "To Do"}</p>
    </div>
  );
};

export default TaskDetails;


