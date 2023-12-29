import React from "react";

interface Props {
    Task: {
        id: number,
        text: string,
    }
    addTask: React.MouseEventHandler,
    inputTask?: React.ChangeEventHandler<HTMLInputElement>,
}

const TaskForm: React.FC<Props> = ({
                                          Task,
                                          addTask
}) => {
    return (
        <div>
            <span>{Task.text}</span>
            <button onClick={addTask}>Add task</button>
        </div>
    )


}
export default TaskForm;