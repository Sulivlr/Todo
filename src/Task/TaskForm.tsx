import React, { useState } from "react";

interface Props {
    addTask: (task: string) => void;
}

const AddTaskForm: React.FC<Props> = ({ addTask }) => {
    const [currentTask, setCurrentTask] = useState<string>('');

    const handleAddTask = () => {
        addTask(currentTask);
        setCurrentTask('');
    }

    return (
        <div>
            <input type="text" value={currentTask} placeholder="add something" onChange={(e) => setCurrentTask(e.target.value)} />
            <button onClick={handleAddTask}>Add something here</button>
        </div>
    )
}

export default AddTaskForm;
