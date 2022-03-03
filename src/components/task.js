import { useState } from "react"
import Form from "./form"

export default function Task({task, users, deleteTask, updateTask, showForm, showUpdateForm}) {   
    const [showInUpdate, setShowInUpdate]=useState(false)
    const {id,message, due_date, assigned_to, assigned_name, priority}= task 
    // console.log({due_date})
    const [userIdvalue, setUserIdvalue]= useState(assigned_to)
    const [userNameval, setUserNameval]=useState(assigned_name)
    const priorityList= ['High', 'Medium', 'Low']
    const getUserIdval= async(event)=>{
        const taskId=event.target.getAttribute("data-id")
        console.log(taskId)
       
        // const resData = await axios('https://devza.com/tests/tasks/update',{
        //     headers:{
        //       AuthToken:  'UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a'
        //     },
        //     data:{assigned_to:event.target.value, id: parseInt(taskId)}
        // })
        // const { updatedTasks } = resData
        // console.log(resData)
        setUserIdvalue(event.target.value)
        let userval=users.find(user=>user.id===event.target.value)
        setUserNameval(userval.name)
    }
    return (
    <>
        <div className='item'>
            <div className='absolute'>
                <p>{due_date?due_date.split(' ')[0]:'TBA'}</p>
            </div>
            <h2>Task {id}</h2>
            <div>
                <p>Assigned to {userNameval || 'no one'}</p>
                <select name="userId" data-id={id} defaultValue={userIdvalue} onChange={(e)=>getUserIdval(e)}>
                    <option hidden disabled value={userIdvalue}> -- assign to {userIdvalue?'another':'a'} user -- </option>
                    {users.map((user)=> 
                        <option value={user.id} key={user.id}>{user.name}</option>
                    )}
                </select>
            </div>
            <div>    
                <h5>{message}</h5>
                <small>{priorityList[parseInt(priority)+1]}</small>
            </div>
            <div>
                <button onClick={()=>deleteTask(id)}>Delete Task</button>
                <button onClick={()=>setShowInUpdate(true)}>Update Task</button>
            </div>          
        </div>
        {showInUpdate && <Form type="update" originalTask={task} users={users} updateTask={updateTask} onClose={()=>setShowInUpdate(false)}/>}
    </>
    )
  }
  