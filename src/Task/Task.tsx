import React from "react";

interface Props {
    task: { id: number; text: string };
    removeTask: (taskId: number) => void;
}

const Task: React.FC<Props> = ({ task, removeTask }) => {
    return (
        <div>
            <span>{task.text}</span>
            <button onClick={() => removeTask(task.id)}>Delete the task</button>
        </div>
    );
};

export default Task;
