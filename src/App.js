import TaskForm from "./components/TaskForm"
import { useState, useEffect } from "react";
import { saveTasks, loadTasks } from "./components/TaskData"

function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    let tasks = loadTasks();
    if (tasks) {
      setTasks(tasks);
    }
  },[])

  useEffect(() => {
    saveTasks(tasks)
    console.log("Tasks",tasks);
  },[tasks])

  const addTask = (name) => {
    setTasks([...tasks, name]);
  }
  return (
    <div className="App">
      <div>
        {tasks.map((item,idx) => {
          return <p key={idx}>{item}</p>
        })}
      </div>
      <TaskForm addTask={addTask} />
    </div>
  );
}

export default App;
