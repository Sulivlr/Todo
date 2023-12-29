import React from "react";

interface Props {
    task: { id: string; text: string };
    removeTask: (event: React.MouseEvent<HTMLButtonElement>, taskId: string) => void;
}

const Task: React.FC<Props> = ({ task, removeTask }) => {
    return (
        <div>
            <span>{task.text}</span>
            <button onClick={(e) => removeTask(e, task.id)}>Delete the task</button>
        </div>
    );
};

export default Task;
