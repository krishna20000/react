import { useState, useEffect } from "react";
import Task from "./components/Task";
import "./style.css";

function App() {
  const getSavedTasks = () => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  };

  const [tasks, setTasks] = useState(getSavedTasks());
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { title: newTask, isCompleted: false }]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const editTask = (index, updatedText) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].title = updatedText;
    setTasks(updatedTasks);
  };

  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].isCompleted = !updatedTasks[index].isCompleted;
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <h1>Task Manager Dashboard</h1>

      <div className="task-input">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter new task..."
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      {tasks.map((task, index) => (
        <Task
          key={index}
          title={task.title}
          isCompleted={task.isCompleted}
          onDelete={() => deleteTask(index)}
          onEdit={(updatedText) => editTask(index, updatedText)}
          onToggleComplete={() => toggleComplete(index)}
        />
      ))}
    </div>
  );
}

export default App;
