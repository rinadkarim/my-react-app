import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TaskList from "./TaskList";
import TaskDetails from "./TaskDetails";
import AddTask from "./AddTask";
import './styles.css';

function App() {
  return (
    <Router>
      <div>
        <h1 className="page-title">Task Management App</h1>
        <nav>
          <ul>
            <li><Link to="/tasks/all">All Tasks</Link></li>
            <li><Link to="/tasks/completed">Completed Tasks</Link></li>
            <li><Link to="/tasks/pending">Pending Tasks</Link></li>
            <li><Link to="/add-task">Add Task</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/tasks/:filter" element={<TaskList />} />
          <Route path="/task/:id" element={<TaskDetails />} />
          <Route path="/add-task" element={<AddTask />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;







