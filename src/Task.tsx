import React, {ChangeEvent, useCallback} from "react";
import {Checkbox, IconButton} from "@material-ui/core";
import {EditableSpan} from "./EditableSpan";
import {DeleteForever} from "@material-ui/icons";
import {TaskType} from "./AppWithRedux";

type TaskPropsType = {
    task: TaskType
    todolistId: string
    removeTask: (id: string, todoListId: string) => void
    changeTaskStatus: (id: string, isDone: boolean, todoListId: string) => void
    changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void
}

export const Task = React.memo(({
                                    task,
                                    removeTask,
                                    changeTaskTitle,
                                    changeTaskStatus,
                                    todolistId
                                }: TaskPropsType) => {
    const onClickHandler = () => removeTask(task.id, todolistId)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        changeTaskStatus(task.id, e.currentTarget.checked, todolistId);
    }
    const onChangeTitleHandler = useCallback((newValue: string) => {
        changeTaskTitle(task.id, newValue, todolistId);
    }, [changeTaskTitle, task.id, todolistId])

    return <div key={task.id} className={task.isDone ? "is-done" : ""}>
        <Checkbox
            color={"secondary"}
            onChange={onChangeHandler}
            checked={task.isDone}/>
        <EditableSpan title={task.title} onChange={onChangeTitleHandler}/>
        <IconButton onClick={onClickHandler}><DeleteForever/></IconButton>
    </div>
})