import React from "react";
import {Link} from "react-router-dom";
import './taskNv.css';
import { MenuUnfoldOutlined } from '@ant-design/icons';

function TaskNav() {
  
return(
<>
  <nav>
  <input type='checkbox' id='check'/>
            <label for='check' className='checkbtn'><MenuUnfoldOutlined /></label>
            <label className='logo'>Suriya</label>
      <ul>
     <li className="navlist"><Link to='/task1' className="navlink">task1</Link></li>
     <li className="navlist"><Link to='/task2' className="navlink" >task2</Link></li>
     <li className="navlist"><Link to='/task3' className="navlink" >task3</Link></li>
     <li className="navlist"><Link to='/task4' className="navlink" >task4</Link></li>
     <li className="navlist"><Link to='/task5' className="navlink" >task5</Link></li>
     <li className="navlist"><Link to='/task6' className="navlink" >task6</Link></li>
     </ul>
  </nav>
 </>
);
}

export default TaskNav;
