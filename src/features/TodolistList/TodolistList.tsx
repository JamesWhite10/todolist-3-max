import React, {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";
import {
    addTodolistTC,
    changeTodolistFilterAC, changeTodoTitleTC,
    fetchTodolistTC,
    FilterValuesType,
    removeTodolistTC,
    TodolistDomainType
} from "./todolists-reducer";
import {addTaskTC, removeTaskTC, TasksStateType, updateTaskTC} from "./tasks-reducer";
import {TaskStatuses} from "../../api/todolists-api";
import {Grid, Paper} from "@material-ui/core";
import {AddItemForm} from "../../components/AddItemForm/AddItemForm";
import {Todolist} from "./Todolist/Todolist";

export const TodolistList: React.FC = () => {
    const todolists = useSelector<AppRootStateType, Array<TodolistDomainType>>(state => state.todolists)
    const tasks = useSelector<AppRootStateType, TasksStateType>(state => state.tasks)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodolistTC())
    }, [dispatch])

    const removeTask = useCallback(function (id: string, todolistId: string) {
        const thunk = removeTaskTC(id, todolistId);
        dispatch(thunk);
    }, [dispatch]);

    const addTask = useCallback(function (title: string, todolistId: string) {
        const thunk = addTaskTC(title, todolistId);
        dispatch(thunk);
    }, [dispatch]);

    const changeStatus = useCallback(function (id: string, status: TaskStatuses, todolistId: string) {
        const thunk = updateTaskTC(id, {status}, todolistId);
        dispatch(thunk);
    }, [dispatch]);

    const changeTaskTitle = useCallback(function (id: string, newTitle: string, todolistId: string) {
        const action = updateTaskTC(id, {title: newTitle}, todolistId);
        dispatch(action);
    }, [dispatch]);

    const changeFilter = useCallback(function (value: FilterValuesType, todolistId: string) {
        const action = changeTodolistFilterAC(todolistId, value);
        dispatch(action);
    }, [dispatch]);

    const removeTodolist = useCallback(function (id: string) {
        const thunk = removeTodolistTC(id);
        dispatch(thunk);
    }, [dispatch]);

    const changeTodolistTitle = useCallback(function (id: string, title: string) {
        const thunk = changeTodoTitleTC(id, title);
        dispatch(thunk);
    }, [dispatch]);

    const addTodolist = useCallback((title: string) => {
        const thunk = addTodolistTC(title);
        dispatch(thunk);
    }, [dispatch]);
    return <>
        <Grid container style={{padding: "15px"}}>
            <AddItemForm addItem={addTodolist}/>
        </Grid>
        <Grid container spacing={5}>
            {
                todolists.map(tl => {
                    let allTodolistTasks = tasks[tl.id];

                    return <Grid item key={tl.id}>
                        <Paper style={{padding: "10px", opacity: "0.8"}}>
                            <Todolist
                                id={tl.id}
                                title={tl.title}
                                tasks={allTodolistTasks}
                                removeTask={removeTask}
                                changeFilter={changeFilter}
                                addTask={addTask}
                                changeTaskStatus={changeStatus}
                                filter={tl.filter}
                                removeTodolist={removeTodolist}
                                changeTaskTitle={changeTaskTitle}
                                changeTodolistTitle={changeTodolistTitle}
                            />
                        </Paper>
                    </Grid>
                })
            }
        </Grid>
    </>
}