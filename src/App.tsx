import React, { useState } from 'react';
import TaskForm from "./Task/TaskForm.tsx";
import Task from "./Task/Task.tsx";

interface Props {
    id: number;
    text: string;
}

const App: React.FC = () => {
    const [tasks, setTasks] = useState<Props[]>([
        { text: 'buy milk', id: 1 },
        { text: 'Walk with dog', id: 2 },
        { text: 'Do homework', id: 3 },
    ]);

    const addTask = (newTaskText: string) => {
        const newTask: Props = {
            id: Date.now(),
            text: newTaskText,
        };
        setTasks([...tasks, newTask]);
    }

    const removeTask = (taskId: number) => {
        const taskIndex = tasks.findIndex((task) => task.id === taskId);

        if (taskIndex !== -1) {
            const newTasks = [...tasks];
            newTasks.splice(taskIndex, 1);
            setTasks(newTasks);
        }
    };

    return (
        <div>
            <TaskForm addTask={addTask} />
            {tasks.map((task) => (
                <Task key={task.id} task={task} removeTask={removeTask} />
            ))}
        </div>
    );
}

export default App;

