import React, {useCallback} from "react";
import {AddItemForm} from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";
import {Button, IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";
import {Task} from "./Task";
import {TaskStatuses, TaskType} from "./api/todolist-api";
import {FilterValuesType} from "./state/todolists-reducer";
import {useDispatch} from "react-redux";
import {fetchTasksTC} from "./state/tasks-reducer";

type TodoListPropsType = {
    id: string,
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string, todoListId: string) => void
    changeFilter: (value: FilterValuesType, todoListId: string) => void
    addTask: (title: string, todoListId: string) => void
    changeTaskStatus: (id: string, status: TaskStatuses, todoListId: string) => void
    changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void
    filter: FilterValuesType
    removeTodoList: (id: string) => void
    changeTodoListTitle: (id: string, newTitle: string) => void
}

export const TodoList = React.memo((props: TodoListPropsType) => {
    console.log("TodoList is called")
    const dispatch = useDispatch()
    useCallback(() => {
        dispatch(fetchTasksTC(props.id))
    }, [])

    const addTask = useCallback((title: string) => {
        props.addTask(title, props.id);
    }, [props.addTask, props.id])

    const removeTodoList = () => {
        props.removeTodoList(props.id)
    }
    const changeTodoListTitle = useCallback((title: string) => {
        props.changeTodoListTitle(props.id, title)
    }, [props.changeTodoListTitle, props.id])

    const changeFilterAll = useCallback(() => {
        props.changeFilter("all", props.id)
    }, [props.changeFilter, props.id])
    const changeFilterActive = useCallback(() => {
        props.changeFilter("active", props.id)
    }, [props.changeFilter, props.id])
    const changeFilterCompleted = useCallback(() => {
        props.changeFilter("completed", props.id)
    }, [props.changeFilter, props.id])

    let tasksForTodolist = props.tasks
    if (props.filter === "completed") {
        tasksForTodolist = props.tasks.filter(t => t.status === TaskStatuses.Completed);
    }
    if (props.filter === "active") {
        tasksForTodolist = props.tasks.filter(t => t.status === TaskStatuses.New);
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
                    tasksForTodolist.map(t =>
                        <Task
                            key={t.id}
                            task={t}
                            todolistId={props.id}
                            changeTaskTitle={props.changeTaskTitle}
                            changeTaskStatus={props.changeTaskStatus}
                            removeTask={props.removeTask}/>)
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
})

