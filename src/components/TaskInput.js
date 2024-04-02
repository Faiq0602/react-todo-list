import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions';
import './TaskInput.css'; // Import CSS file for styling

function TaskInput() {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.trim() !== '') {
      dispatch(addTask(task));
      setTask('');
    }
  };

  return (
    <div className="task-input-container">
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit} className="task-input-form">
        <input
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={handleInputChange}
          className="task-input-field"
        />
        <button type="submit" className="add-task-button">Add Task</button>
      </form>
      {/* Optional: Add images or other elements */}
    </div>
  );
}

export default TaskInput;
