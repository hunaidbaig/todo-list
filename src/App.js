import { useState } from 'react';
import './App.css';
import AddTaskModal from './components/AddTaskModal';
import TodoList from './components/TodoList';

function App() {
  const [toggle, setToggle] = useState(false);
  const [tasks, setTasks] = useState([]);


  const onAddHandler = () => {
    setToggle(!toggle);
  }

  return (
    <div className="App">
      <nav className='border-bottom'>
        <h1>Todo List</h1>
        <div className='addTask' >
          <div className='left-nav btn btn-outline-success' onClick={onAddHandler}>
            <i className="fa-solid fa-circle-plus"></i>
            <span >Add Task</span>
          </div>
          <div className='right-nav'>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <main className='list-section'>
        <h1>Today's Task List</h1>
        {
          tasks.map(task => (
            <TodoList 
                key={task.id}
                id={task.id} 
                title={task.title} 
                description={task.description} 
                date={task.date} 
                tasks={tasks} 
                setTasks={setTasks}
                onAddHandler={onAddHandler}
              />
          ))
        }
      </main>
      {
        toggle ? <AddTaskModal tasks={tasks} setTasks={setTasks} onAddHandler={onAddHandler} /> : null
      }
    </div>
  );
}

export default App;
