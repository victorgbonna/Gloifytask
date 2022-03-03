import { useState } from "react"

export default function Form({type, originalTask={}, updateTask, createTask, users, taskLength, onClose}) {
    const {id,message, due_date, assigned_to, assigned_name, priority}= originalTask
    const taskId=id || taskLength+2
    const [taskMsg, setTaskMsg]= useState(message)
    const [taskDue, setTaskDue]= useState(due_date?due_date.split(' ')[0]:'') 
    const [userIdvalue, setUserIdvalue]= useState(assigned_to)
    const [userNameval, setUserNamevalue]= useState(assigned_name)

    const [taskPr, setTaskPr]=useState(priority || '')
    const priorityList= ['High', 'Medium', 'Low']
    const changeUserVal=(e)=>{
      setUserIdvalue(e.target.value)
      let userval=users.find(user=>user.id==e.target.value)
      setUserNamevalue(userval.name)
    }
    const defaultBehav=(e)=>{
      e.preventDefault()
      onClose()
    }

    return (

      <div className='headerdiv'>
          <h4>{type} task {taskId} </h4>
          <form onSubmit={(e)=>defaultBehav(e)}>
            <textarea cols="30" rows="10" value={taskMsg || ""}  onChange={(e)=>setTaskMsg(e.target.value)} placeholder="Enter message"/>
            <label htmlFor="start">Due date:</label>
            <input type="date" id="start" name="trip-start" value={taskDue || ""} min="2018-01-01"  onChange={(e)=>setTaskDue(e.target.value)}/>
            <select name="userId" defaultValue={taskPr} onChange={(e)=>setTaskPr(e.target.value)}>
                {!taskPr && <option hidden disabled value={taskPr}> -- assign a priority -- </option>}
                {priorityList.map((priority, index)=> 
                    <option value={index+1} key={index+1}>{priority}</option>
                )}
            </select>
            <select name="userId" defaultValue={userIdvalue} onChange={(e)=>changeUserVal(e)}>
                {!userIdvalue && <option hidden disabled value={userIdvalue}> -- assign to a user -- </option>}
                {users.map((user)=> 
                    <option value={user.id} key={user.id}>{user.name}</option>
                )}
            </select>
            <div>
              <input type="submit" onClick={type=='update'?
              ()=>updateTask(taskId, {message:taskMsg, assigned_to: userIdvalue, assigned_name:userNameval, due_date:taskDue, priority: taskPr})
              :()=>createTask(taskId, {message:taskMsg, assigned_to: userIdvalue, assigned_name:userNameval, due_date:taskDue, priority: taskPr})}/>
              <button onClick={onClose}>Close</button>
            </div>
            
          </form>
      </div>
    )
  }
  