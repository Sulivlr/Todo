import React from "react";

interface Props {
    task: {
        id: number;
        text: string
    };
    removeTask: React.MouseEventHandler,
}

const Task: React.FC<Props> = ({
                                   task,
                                   removeTask
                               }) => {
    return (
        <div>
            <span>{task.text}</span>
            <button onClick={removeTask}>Delete the task</button>
        </div>
    );
};

export default Task;
