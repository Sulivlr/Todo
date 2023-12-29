import React, {useState} from 'react';
import Task from "./Task/Task.tsx";
import TaskForm from "./Task/TaskForm.tsx";

interface Props {
    id: number;
    text: string;
}

const App: React.FC = () => {
    const [tasks, setTasks] = useState<Props[]>([
        {text: 'buy milk', id: 1},
        {text: 'Walk with dog', id: 2},
        {text: 'Do homework', id: 3},
    ]);

    const removeTask = (index: number) => {
        const taskCopy = [...tasks];
        taskCopy.splice(index, 1);
        setTasks(taskCopy);
    };

    const inputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const tasksCopy = [...tasks];
        const taskCopy = {...tasksCopy[index]};
        taskCopy.text = e.target.value;
        tasksCopy[index] = taskCopy;
        setTasks(tasksCopy);
    }


    const addTask = (index: number) => {
        const newTask = {
            text: 'New Task',
            id: tasks.length + 1
        };
        setTasks([...tasks, newTask]);
    }

    const tasksList = tasks.map((task, index) => (
        <Task
            key={task.id}
            task={task}
            removeTask={() => removeTask(index)}
            inputChange={(e: React.ChangeEvent<HTMLInputElement>) => inputChange(e, index)}
        />
    ));

    return (
        <div>
            <div>
                <button onClick={addTask}>Add Something</button>
                <input
                    onChange={(e) => inputChange(e, 0)}
                    value={tasks[0].text}
                    type="text"/>
            </div>
            {tasksList}
        </div>
    );
}

export default App;



