import React,{useState} from 'react';
import '../../login/login.css'

export default function Add({onAdd}) {
const [text,setText] = useState('')
const [day,setDay] = useState('')
const [remainder,setRemainder] = useState(false)

const onSubmit = (e) =>{
    e.preventDefault()

    if(!text){
        alert('please add text')
        return
    }

    onAdd({text,day,remainder})

    setText('')
    setDay('')
    setRemainder(false)
}

  return (
      <div className='fromDesign'>
    <from onSubmit={onSubmit}>
        <div>
            <label>Task</label><br/>
            <input className='inputDesign' type='text' placeholder='Add task' onChange={(e)=> setText(e.target.value)}/>
        </div><br/>
        <div>
            <label>Day & Time</label><br/>
            <input className='inputDesign' type='text' placeholder='Add day and time' onChange={(e)=> setDay(e.target.value)}/>
        </div><br/>
        <div>
            <label className='check'>Set remainder
            <input type='checkbox' checked={remainder} onChange={(e)=> setRemainder(e.currentTarget.checked)}/>
            </label>
        </div><br/>

        <input className='btnSave' type='submit' value='Save task' onClick={onSubmit}/>
    </from>
    </div>
  )
}
