import React from 'react';
import Tasks from './tasks.js'

export default function Traker({task, onDelete, onToggle}) {
  

      
  return (

    <>
    {task.map( (x) => (
        <Tasks key={x.id} task={x} onDelete={onDelete} onToggle={onToggle}/>
    ))}
    </>
  )
}
