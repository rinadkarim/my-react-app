import React from "react";
import {Link} from "react-router-dom"

function NavBar() {
    return(
       
       <nav>
          <ul>
            <li><Link to="/tasks/all"><button>All Tasks</button></Link></li>
            <li><Link to="/tasks/completed"><button>Completed Tasks</button></Link></li>
            <li><Link to="/tasks/pending"><button>To Do</button></Link></li>
            <li><Link to="/add-task"><button>Add Task</button></Link></li>
           </ul>
        </nav>
    );
}