import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css'; // Import CSS file for styling

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default App;
