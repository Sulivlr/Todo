import {useState} from 'react'
import TaskForm from "./Task/TaskForm.tsx";
import Task from "./Task/Task.tsx";

interface Props {
    id: number;
    text: string;
}


class TaskItem {
}

const App: () => void = () => {
    const [tasks, setTasks] = useState<Props[]>([
        {text: 'buy milk', id: 1},
        {text: 'Walk with dog', id: 2},
        {text: 'Do homework', id: 3},
    ]);

    const addTask = (newTaskText: string) => {
        const newTask: TaskItem = {
            id: Date.now().toString(),
            text: newTaskText,
        }
        setTasks([...tasks,newTask])
    }

    const removeTask = (taskId: string) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
    };

    return (

    )



}


export default App
