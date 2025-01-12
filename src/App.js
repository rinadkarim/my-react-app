import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TaskList from "./TaskList";
import TaskDetails from "./TaskDetails";
import AddTask from "./AddTask";
import './styles.css';

function App() {
  return (
    <Router>
      <h1 className="page-title">Task Management App</h1>
      <nav>
        <ul>
          <li><Link to="/tasks/all"><button>All Tasks</button></Link></li>
          <li><Link to="/tasks/completed"><button>Completed Tasks</button></Link></li>
          <li><Link to="/tasks/pending"><button>To Do</button></Link></li>
          <li><Link to="/add-task"><button>Add Task</button></Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/tasks/:filter" element={<TaskList />} />
        <Route path="/tasks/:id" element={<TaskDetails />} />
        <Route path="/add-task" element={<AddTask />} />
      </Routes>
    </Router>
  );
}

export default App;








