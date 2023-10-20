import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const CreateTask = ({modal, toggle, save}) => {
    const [taskName, setTaskName] = useState('');
    const [taskDesc, setTaskDesc] = useState('');
    const [dueDate, setDueDate] = useState('');

    const handleChange = (e) => {
        const{name, value} = e.target
        if (name === 'taskName'){
            setTaskName(value); 
        }else if(name === 'taskDesc'){
            setTaskDesc(value);
        }else{
            setDueDate(value);
        }
    }

    const handleSave = () => {
        let taskObj ={}
        taskObj["Name"] = taskName;
        taskObj["Description"] = taskDesc;
        taskObj["DueDate"] = dueDate;
        save(taskObj)
    }

  return (
    <Modal isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }} toggle={toggle}>
      <ModalHeader toggle={toggle}>Add a new Task</ModalHeader>
      <ModalBody>
        <form>
            <div className="form-group">
                <label>Task Title</label>
                <input type="text" className="form-control"  value={taskName} onChange={handleChange} required name="taskName"/>
            </div>
            <div className="form-group">
                <label>Task Description</label>
            <textarea rows='3' className="form-control" value={taskDesc} onChange={handleChange}  required name="taskDesc"></textarea>
            </div>
            <div>
                <label>Due Date</label>
                <input type ="date" className="form-control" value={dueDate} onChange={handleChange} name="dueDate"/>
            </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSave}>
          Add
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateTask;
