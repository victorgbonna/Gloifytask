import axios from 'axios'
import { useState } from 'react';
import TasksComp from '../components/tasksComp';

export default function Home({userss,taskss}) {
  
  let users= [
    {
        "id": "1",
        "name": "Arpit",
        "picture": "https://images.generated.photos/e9j7MmGzErA8i3bvDhGiZjsdm3RBYAM3vN2NLeNAL8E/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA1NTg4MjYuanBn.jpg"
    },
    {
        "id": "2",
        "name": "Dushyant",
        "picture": "https://images.generated.photos/UwsBYfox5GebeDg4exhGBbmHAS45Zv3bhIpLv8NR1Ug/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAzNTIxMzcuanBn.jpg"
    },
    {
        "id": "3",
        "name": "Prabhat",
        "picture": "https://images.generated.photos/BhXjncNzamfYGsbxydy_gm2ez9qesIf7oQIqpkhMNeA/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA5MzcwNzMuanBn.jpg"
    },
    {
        "id": "4",
        "name": "Shobha",
        "picture": "https://images.generated.photos/dFS-ATrp2M2GemkZGaRqApn61dCmKbDIMWE14Nx7Zy8/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAzNTk3MzguanBn.jpg"
    },
    {
        "id": "5",
        "name": "Ahmed",
        "picture": "https://images.generated.photos/oO4hnwWAcGN69LKqAUTiL3uKADBoTgo1I0yfmA_V7GM/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA1NjQwNzUuanBn.jpg"
    }
  ]
  let tasks= [
    {
        "id": "4397",
        "message": "do",
        "assigned_to": false,
        "assigned_name": false,
        "created_on": "2022-01-04 12:46:59",
        "due_date": null,
        "priority": "1"
    },
    {
        "id": "4399",
        "message": "Done",
        "assigned_to": false,
        "assigned_name": false,
        "created_on": "2022-01-04 12:47:26",
        "due_date": null,
        "priority": "2"
    },
    {
        "id": "4435",
        "message": "hello every one ",
        "assigned_to": "2",
        "assigned_name": "Dushyant",
        "created_on": "2022-01-05 11:24:44",
        "due_date": "2022-01-05 12:02:22",
        "priority": "2"
    },
    {
        "id": "4440",
        "message": "do",
        "assigned_to": false,
        "assigned_name": false,
        "created_on": "2022-01-05 13:35:58",
        "due_date": null,
        "priority": "1"
    },
    {
        "id": "4441",
        "message": "Do something?",
        "assigned_to": "1",
        "assigned_name": "Arpit",
        "created_on": "2022-01-06 00:09:53",
        "due_date": "2020-09-18 12:12:12",
        "priority": "2"
    },
    {
        "id": "4442",
        "message": "Do something?",
        "assigned_to": "1",
        "assigned_name": "Arpit",
        "created_on": "2022-01-06 00:09:53",
        "due_date": "2020-09-18 12:12:12",
        "priority": "2"
    },
    {
        "id": "4443",
        "message": "Do something?",
        "assigned_to": "1",
        "assigned_name": "Arpit",
        "created_on": "2022-01-06 00:09:53",
        "due_date": "2020-09-18 12:12:12",
        "priority": "2"
    },
    {
        "id": "4444",
        "message": "Do something?",
        "assigned_to": "1",
        "assigned_name": "Arpit",
        "created_on": "2022-01-06 00:10:13",
        "due_date": "2020-09-18 12:12:12",
        "priority": "2"
    },
    {
        "id": "4445",
        "message": "Do something?",
        "assigned_to": "1",
        "assigned_name": "Arpit",
        "created_on": "2022-01-06 00:10:13",
        "due_date": "2020-09-18 12:12:12",
        "priority": "2"
    },
    {
        "id": "4446",
        "message": "Do something?",
        "assigned_to": "1",
        "assigned_name": "Arpit",
        "created_on": "2022-01-06 00:10:15",
        "due_date": "2020-09-18 12:12:12",
        "priority": "2"
    },
    {
        "id": "4447",
        "message": "Do something?",
        "assigned_to": "1",
        "assigned_name": "Arpit",
        "created_on": "2022-01-06 00:10:15",
        "due_date": "2020-09-18 12:12:12",
        "priority": "2"
    },
    {
        "id": "4448",
        "message": "Do something?",
        "assigned_to": "1",
        "assigned_name": "Arpit",
        "created_on": "2022-01-06 00:10:25",
        "due_date": "2020-09-18 12:12:12",
        "priority": "2"
    },
    {
        "id": "4449",
        "message": "Do something?",
        "assigned_to": "1",
        "assigned_name": "Arpit",
        "created_on": "2022-01-06 00:10:25",
        "due_date": "2020-09-18 12:12:12",
        "priority": "2"
    },
    {
        "id": "4450",
        "message": "Do something?",
        "assigned_to": "1",
        "assigned_name": "Arpit",
        "created_on": "2022-01-06 00:53:22",
        "due_date": "2020-09-18 12:12:12",
        "priority": "2"
  }]
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

// export async function getServerSideProps() {
//   const [usersRes, tasksRes] = await Promise.all([
//     axios.get('https://devza.com/tests/tasks/listusers',{
//       headers:{
//         AuthToken:  'UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a'
//       }
//     }),
//     axios.get('https://devza.com/tests/tasks/list',{
//       headers:{
//         AuthToken:  'UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a'
//       }
//     })
//   ]);
//   const [users, tasks] = await Promise.all([
//     usersRes.data.users,
//     tasksRes.data.tasks
//   ]);
//   // console.log({usersRes}, {tasksRes})
//   return { props: { users, tasks } };
// }