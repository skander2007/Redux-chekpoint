import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const AddTask = () => {
    const [text,setText] = useState('')
    const dispatch = useDispatch()
    const handleSubmit = (e) =>{
        e.preventDefault();
        const newTask = {
            id:Math.random(),
            action:text,
            isDone:false 
        }
    }
  return (
    <div>
        <div>
        <h1>TO DO List</h1>
        <from onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
        <button>Add</button>
        </from>
    </div>
    </div>
  )
}

export default AddTask