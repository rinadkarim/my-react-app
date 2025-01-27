import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import TaskList from "./TaskList";
import TaskDetails from "./TaskDetails";
import AddTask from "./AddTask";
import './styles.css';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/tasks")
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error("Error fetching tasks:", err));
  }, []);

  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <Router>
      <h1 className="page-title">Task Management App</h1>
      <NavBar />
      <Routes>
        <Route path="/tasks/:filter" element={<TaskList tasks={tasks} />} />
        <Route path="/tasks/:id" element={<TaskDetails />} />
        <Route path="/add-task" element={<AddTask addTask={addTask} />} />
      </Routes>
    </Router>
  );
}

export default App;








