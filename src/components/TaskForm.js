import { useState } from "react"

function TaskForm(props) {
    const [taskName, setTaskName] = useState();

    return (
        <div>
            New Task Name
            <input type="text" value={taskName} onChange={(ev) => setTaskName(ev.target.value)} />
            <button onClick={() => props.addTask(taskName)}>Add</button>
        </div>
    )
}

export default TaskForm;