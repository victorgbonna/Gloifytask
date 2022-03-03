import {useState} from 'react'
import Form from './form';
import Scroll from './scroll';
import Task from './task';

export default function TasksComp({users,filteredTasks, searchQuery, deleteTask, createTask, updateTask}) {
    const [showCreateForm,setShowCreateForm]=useState(false)
    return (
        <>
            <div className='container'>
                <h1>
                    Todo App
                </h1>
                <button onClick={()=>setShowCreateForm(true)}>Create Task</button>
                {showCreateForm && <Form type="Create" users={users} taskLength={filteredTasks.length} createTask={createTask} onClose={()=>setShowCreateForm(false)}/>}
                <div className='prdiv'>
                    <div>
                        <h2>High</h2>
                    </div>
                    <div>
                        <h2>Medium</h2>
                    </div>
                    <div>
                        <h2>Low</h2>
                    </div>
                </div>
                <div>
                    <input type="text" placeholder='Search' onChange={(e)=> searchQuery(e.target.value)}/>
                </div>
                {filteredTasks.length>0 ?
                <Scroll>
                    {filteredTasks.map((task)=>(
                        <Task key={task.id} task={task} users={users}  deleteTask={deleteTask} updateTask={updateTask}/>                    
                    ))}
                </Scroll>: <h2>No task to show</h2> }
            </div>

        </>
        
    )    
}

