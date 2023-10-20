import React, { useState } from 'react';
import EditTask from '../Modals/EditTask'

import { FontawesomeObject } from '@fortawesome/fontawesome-svg-core';


const Card = ({taskObj,index,deleteTask}) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal)

    const handleDelete = () => {
        deleteTask(index);
    }

    return (
        <div className='cardWrapper mr-5' style={{margin:'20px', boxShadow:'none', border:'1px solid', backgroundColor:'lightcyan'}}>
            <div className='cardTop' style={{"backgroundColor":"green"}}></div>
                <div className='taskHolder'>
                <p className='cardHeader' style={{color:"black", marginTop:"5px",fontSize:"17px",borderRadius:"10px"}}> {taskObj.Name}    </p>         
                <p className='cardDescription' style={{color:"black"}}>{taskObj.Description}</p>
                <p className='cardDescription'style={{color:"black"}}>{taskObj.DueDate}</p>
               
                <div style={{"position": "absolute", "right":"20px","bottom":"20px"}}>
                     <button onClick={()=> setModal(true)} style={{"backgroundColor":"orange", "margin":"4px","fontSize":"20px","border":"0"}}>Edit</button>
                    <button onClick={handleDelete} style={{"backgroundColor":"orange","fontSize":"20px","border":"0"}}>Delete</button>
                </div>
            </div>
            <EditTask  toggle={toggle} modal={modal} edit= {EditTask}/>
            </div>
    )};
            

export default Card;
