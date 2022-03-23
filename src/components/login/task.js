import React from 'react';
import TaskNav from '../navbar/taskNv';
import {Routes, Route} from "react-router-dom";
import Task1 from '../navbar/task1'
import Task2 from '../navbar/task2'
import Task3 from '../navbar/task3'
import Task4 from '../navbar/task4'
import Task5 from '../navbar/task5'
import Task6 from '../navbar/task6'

export default function Task() {
  return (
    <div>
        <TaskNav/>
        <Routes>
        <Route path='/' element={<Task1/>}/>
        <Route path='/task2' element={<Task2/>}/>
        <Route path='/task3' element={<Task3/>}/>
        <Route path='/task4' element={<Task4/>}/>
        <Route path='/task5' element={<Task5/>}/>
        <Route path='/task6' element={<Task6/>}/>
      </Routes>
    </div>
    
  )
}
