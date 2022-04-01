import React from 'react'

export default function Tasks({task, onDelete, onToggle}) {
  return (
    <div className='task' onDoubleClick={()=>onToggle(task.id)}>
        <h1>{task.text}</h1>
        <span>{task.day}</span>
        <button className='btnDelete' onClick={()=>onDelete(task.id)}>delete</button>
    </div>
  )
}
