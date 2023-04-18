import React, { useState } from 'react'
import AddTaskModal from './AddTaskModal';

function TodoList({ id, title, description, date, tasks, setTasks }) {

    const onDelete = () => {
        let tempList = [...tasks];
        tempList.splice(id - 1, 1);
        setTasks(tempList);
        console.log(tempList);
    }
    let [editTemp, setEditTemp] = useState(false)

    const onEdit = (e) => {
        setEditTemp(!editTemp)
        console.log(editTemp)
    }

    const onHandle = ()=>{
        setEditTemp(!editTemp)
    }

    return (
        <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action" aria-current="true">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{title}</h5>
                    <small>3 days ago</small>
                </div>
                <p className="mb-1">{description}</p>
                <div className="d-flex w-100 justify-content-between">
                    <small>{date}</small>
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-success" onClick={(e) => onEdit(e)}>Edit</button>
                        {editTemp ? 
                            <AddTaskModal
                                id={2}
                                title={title}
                                description={description}
                                date={date} 
                                tasks={tasks} 
                                setTasks={setTasks} 
                                onAddHandler={onHandle} 
                                /> : null}
                        <button type="button" className="btn btn-outline-danger" onClick={(e) => onDelete(e)}>Delete</button>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default TodoList