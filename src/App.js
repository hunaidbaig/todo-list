import { useState } from 'react';
import './App.css';
import AddTaskModal from './components/AddTaskModal';

function App() {
  const [add, setAdd] = useState(false);

  const onAddHandler =() =>{
    setAdd(!add);
    console.log('hello');
    console.log(add);
  }

  return (
    <div className="App">
      <div className='addTask' onClick={onAddHandler}>
        <i className="fa-solid fa-circle-plus"></i>
        <span >Add Task</span>
      </div>
        {
          add ? <AddTaskModal onAddHandler={onAddHandler}  /> : null
        }
    </div>
  );
}

export default App;
