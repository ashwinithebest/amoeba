import React from 'react'
import { useParams } from 'react-router-dom'

const Task = () => {
    const params = useParams();
    const taskId = params.taskid;
    console.log(params)
  return (
<h2>this is task with TaskId: {taskId}</h2>   
  )
}

export default Task