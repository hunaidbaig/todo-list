import { useState } from 'react';

function AddTaskModal(props) {
  
  return (
    <div className="textModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button type="button" className="btn-close" onClick={()=> props.onAddHandler()}></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Title</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your title" />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">Description</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="mb-3">
              <label for="date" className="form-label date">Date: </label>
              <input type={'date'} id='date'   />
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={()=> props.onAddHandler()}>Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTaskModal;
