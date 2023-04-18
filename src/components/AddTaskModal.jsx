import { useState } from 'react';

function AddTaskModal(props) {
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);
  const [date, setDate] = useState(new Date().toJSON().slice(0, 10));

  const onDateChange = (e)=>{
    const newDate = new Date(e.target.value).toJSON().slice(0, 10);
    setDate(newDate);
    console.log(newDate);
  }

  const onAddTaskHandler = ()=>{
    const id = props.tasks.length;
    const item = {
      id: id,
      title: title,
      description : description,
      date: date
    }
    props.setTasks([...props.tasks, item]);
    props.onAddHandler()
  }

  const onEditTaskHandler = ()=>{
    let arr = [...props.tasks];
    const item = {
      id: props.id,
      title: title,
      description : description,
      date: date
    }
    for(let i in arr){
      if(i === props.id){
        arr[i] = item
        console.log(props.tasks)
      }
    }
    props.setTasks(arr);
    props.onAddHandler()
  }

 

  return (
    <div className="textModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Todo</h5>
            <button type="button" className="btn-close" onClick={()=> props.onAddHandler()}></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Title</label>
              <input type="text" className="form-control" onChange={(e)=> setTitle(e.target.value)} value={title} id="exampleFormControlInput1" placeholder="Enter your title" />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">Description</label>
              <textarea className="form-control" onChange={(e)=> setDescription(e.target.value)} value={description} id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="mb-3">
              <label for="date" className="form-label date">Date: </label>
              <input type='date' id='date'  value={date} onChange={(e)=> onDateChange(e)}  />
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={()=> props.onAddHandler()}>Close</button>
            {
              props.editTemp ? 
                <button type="button" className="btn btn-primary" onClick={onEditTaskHandler}>update</button>
              : <button type="button" className="btn btn-primary" onClick={onAddTaskHandler}>Add Task</button>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTaskModal;
