import React, {ChangeEvent} from "react";
import {FilterValueType, TaskType} from "./App";
import {AddItemForm} from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";
import {Button, Checkbox, IconButton} from "@material-ui/core";
import {Delete, DeleteForever} from "@material-ui/icons";

type TodoListPropsType = {
    id: string,
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string, todoListId: string) => void
    changeFilter: (value: FilterValueType, todoListId: string) => void
    addTask: (title: string, todoListId: string) => void
    changeTaskStatus: (id: string, isDone: boolean, todoListId: string) => void
    changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void
    filter: FilterValueType
    removeTodoList: (id: string) => void
    changeTodoListTitle: (id: string, newTitle: string) => void
}

export function TodoList(props: TodoListPropsType) {
    const addTask = (title: string) => {
        props.addTask(title, props.id);
    }

    const removeTodoList = () => {
        props.removeTodoList(props.id)
    }
    const changeTodoListTitle = (title: string) => {
        props.changeTodoListTitle(props.id, title)
    }

    const changeFilterAll = () => {
        props.changeFilter("all", props.id)
    }
    const changeFilterActive = () => {
        props.changeFilter("active", props.id)
    }
    const changeFilterCompleted = () => {
        props.changeFilter("completed", props.id)
    }

    return (
        <div>
            <h2>
                <EditableSpan title={props.title} onChange={changeTodoListTitle}/>
                <IconButton style={{margin: "10px"}}
                            onClick={removeTodoList}>
                    <Delete/>
                </IconButton>
            </h2>
            <AddItemForm addItem={addTask}/>
            <div>
                {
                    props.tasks.map(t => {
                        const onClickHandler = () => props.removeTask(t.id, props.id);
                        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                            props.changeTaskStatus(t.id, e.currentTarget.checked, props.id);
                        }
                        const onChangeTitleHandler = (newValue: string) => {
                            props.changeTaskTitle(t.id, newValue, props.id);
                        }
                        return <div key={t.id} className={t.isDone ? "is-done" : ""}>
                            <Checkbox
                                color={"secondary"}
                                onChange={onChangeHandler}
                                checked={t.isDone}/>
                            <EditableSpan title={t.title} onChange={onChangeTitleHandler}/>
                            <IconButton onClick={onClickHandler}><DeleteForever/></IconButton>
                        </div>
                    })
                }
            </div>
            <div>
                <Button variant={props.filter === "all" ? "contained" : "text"}
                        size={"small"}
                        style={{margin: "5px"}}
                        onClick={changeFilterAll}
                        color={"inherit"}>All</Button>
                <Button variant={props.filter === "active" ? "contained" : "text"}
                        size={"small"}
                        onClick={changeFilterActive}
                        color={"secondary"}>Active</Button>
                <Button variant={props.filter === "completed" ? "contained" : "text"}
                        size={"small"}
                        style={{margin: "5px"}}
                        onClick={changeFilterCompleted}
                        color={"primary"}>Completed</Button>
            </div>
        </div>
    )
}

