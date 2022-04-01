import React, { useState } from "react";
import Traker from "./tasktrak/traker";
import Add from "./tasktrak/add";
import TaskNav from "./taskNv";
import './task6.css';

export default function Task6() {
  const onButtonClick = () => {
    setShowForm(!showForm)
  };

  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState([]);

  //on delete
  const deleteTask = (id) => {
    // console.log('delete',id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //remainder
  const toggleReminder = (id) => {
    // console.log(id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, remainder: !task.remainder } : task
      )
    );
  };

  //add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    // console.log(newTask);
    setTasks([...tasks, newTask]);
  };

  return (
    <>
      <TaskNav />
      <div className="container">
      <h1 className="header">Task Tracker</h1>
      {showForm && <Add onAdd={addTask} />}
      <br />
      <br />
      <button
      className="btnAdd"
        onClick={onButtonClick}
      >
        {showForm? 'Close':' Add '}
      </button>
      <br />
      {tasks.length > 0 ? (
        <Traker task={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        <h2 className="noTask">No tasks are there</h2>
      )}
      </div>
    </>
  );
}
