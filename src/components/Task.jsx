import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask } from '../redux/action'

const Task = ({task}) => {
  const dispatch =useDispatch()

  return (
    <div>
        <h3>{task.action}</h3>
        <button on onClick={()=>dispatch(deleteTask(task.id))}>Delete</button>
        <button>Complete</button>
    </div>
  )
}

export default Task