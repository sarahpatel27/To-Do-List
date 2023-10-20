import React from 'react';
import { useState } from 'react';
import CreateTask from '../Modals/CreateTask';
import Card from './Card';

const ToDoList = () => {
    const toggle = () => setModal(!modal)
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([
         
]);

const deleteTask = (index) => {
    let tempList = taskList;
    tempList.splice(index,1);
    localStorage.setItem("taskList",JSON.stringify(tempList))
    setTaskList(tempList)
    window.location.reload();
}


    const saveTask = (taskObj) =>{
        console.log(taskObj)
        setTaskList([...taskList, taskObj]) 
        setModal(false)

    }

    return (
        <>
        <div className='header text-center'>
            <h1> ToDo List</h1>
            <button className='btn btn-primary mt-2' onClick = {() => setModal(true)}>Add task</button>
        </div>
        <div className = "task-container">
            {
                taskList && taskList.map((obj, index) => {
                    return(
                        <>
                            <Card taskObj = {obj} index={index} deleteTask = {deleteTask}/>
                        </>
                    )
                })
            }
        </div>
        <CreateTask  toggle={toggle} modal={modal} save= {saveTask}/>
        </>
    );
}

export default ToDoList;
