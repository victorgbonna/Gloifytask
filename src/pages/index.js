import axios from 'axios'
import { useState } from 'react';
import TasksComp from '../components/tasksComp';

export default function Home({users,tasks}) {
  const [filteredTasks, setfilteredTasks]= useState(tasks)
  let searchTasks
  const searchQuery=(searchField)=>{
    let queryTasks=searchTasks || tasks
    setfilteredTasks(queryTasks.filter(task=>task.message.includes(searchField)))
  }
  const postApiCall=async(url, data)=>{
    const res = await axios(url,{
      headers:{
        AuthToken:  'UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a'
      },
      data
    })
    return res.data
  }
  const deleteTask=(id)=>{
      // const resData=await postApiCall('https://devza.com/tests/tasks/delete',{id})
      setfilteredTasks(filteredTasks.filter((task)=> task.id != id))
      searchTasks=filteredTasks
  }
  const updateTask=(id, updates)=>{
    // const resData=await postApiCall('https://devza.com/tests/tasks/update',updates)
    const newtasks=[...filteredTasks]
    const index=newtasks.findIndex((task)=>task.id==id)
    newtasks[index]={id,...updates}
    setfilteredTasks(newtasks)
    searchTasks=filteredTasks

  }
  const createTask=async(id, data)=>{
    // const resData=await postApiCall('https://devza.com/tests/tasks/create',data)
    const task= {id,...data}
    let new_task=[...filteredTasks, task]
    setfilteredTasks(new_task)
    searchTasks= filteredTasks
  }

  return(
    <TasksComp users={users} filteredTasks={filteredTasks} searchQuery={searchQuery} deleteTask={deleteTask} createTask={createTask} updateTask={updateTask}/>
  )

}

export async function getServerSideProps() {
  const [usersRes, tasksRes] = await Promise.all([
    axios.get('https://devza.com/tests/tasks/listusers',{
      headers:{
        AuthToken:  'UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a'
      }
    }),
    axios.get('https://devza.com/tests/tasks/list',{
      headers:{
        AuthToken:  'UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a'
      }
    })
  ]);
  const [users, tasks] = await Promise.all([
    usersRes.data.users,
    tasksRes.data.tasks
  ]);
  // console.log({usersRes}, {tasksRes})
  return { props: { users, tasks } };
}