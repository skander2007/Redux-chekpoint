import { useSelector } from "react-redux"
import Task from "./Task"
import React from 'react'

const TaskList = () => {
    const {tasks} = useSelector(state=> state)
    console.log(tasks)
  return (
    <div>
        
        {
            tasks.map((el,i)=>
                <Task task={el} key={i}/>
                )
        }
    </div>
  )
}

export default TaskList