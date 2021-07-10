import React, {useCallback, useEffect} from 'react';
import './App.css';
import {AddItemForm} from "./AddItemForm";
import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {
    addTodolistAC,
    changeTodolistFilterAC,
    changeTodolistTitleAC, fetchTodolistTC, FilterValuesType,
    removeTodolistAC, TodolistDomainType
} from "./state/todolists-reducer";
import {addTaskAC, updateTaskAC, removeTaskAC} from "./state/tasks-reducer";
import {AppRootState} from "./state/store";
import {useDispatch, useSelector} from "react-redux";
import {TodoList} from "./TodoList";
import {TaskStatuses, TaskType} from "./api/todolist-api";

export type TasksStateType = {
    [key: string]: Array<TaskType>
}

const App = React.memo(() => {
    console.log("App is called")
    const dispatch = useDispatch()
    const todoLists = useSelector<AppRootState, Array<TodolistDomainType>>(state => state.todoLists)
    const tasks = useSelector<AppRootState, TasksStateType>(state => state.tasks)

    useEffect(() => {
        dispatch(fetchTodolistTC())
    }, [])

    const removeTask = useCallback((id: string, todolistId: string) => {
        const action = removeTaskAC(id, todolistId)
        dispatch(action)
    }, [dispatch])

    const addTasks = useCallback((title: string, todolistId: string) => {
        const action = addTaskAC(title, todolistId)
        dispatch(action)
    }, [dispatch])

    const changeStatus = useCallback(function (id: string, status: TaskStatuses, todolistId: string) {
        const action = updateTaskAC(id, {status}, todolistId)
        dispatch(action)
    }, [dispatch])

    const changeTitle = useCallback(function (id: string, newTitle: string, todolistId: string) {
        const action = updateTaskAC(id, {title: newTitle}, todolistId)
        dispatch(action)
    }, [dispatch])

    const changeFilter = useCallback(function (value: FilterValuesType, todolistId: string) {
        const action = changeTodolistFilterAC(todolistId, value)
        dispatch(action)
    }, [dispatch])

    const removeTodoList = useCallback((todolistId: string) => {
        dispatch(removeTodolistAC(todolistId))
    }, [dispatch])

    const changeTodoListTitle = useCallback((todolistId: string, newTitle: string) => {
        dispatch(changeTodolistTitleAC(todolistId, newTitle))
    }, [dispatch])

    const addTodoList = useCallback((title: string) => {
        const action = addTodolistAC(title)
        dispatch(action)
    }, [dispatch])

    return (
        <div className="App">
            <AppBar position={"static"}>
                <Toolbar style={{justifyContent: "space-between"}}>
                    <IconButton edge={"start"} color={"inherit"} aria-label={"Menu"}>
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        TodoList
                    </Typography>
                    <Button color={"inherit"}>Login</Button>
                </Toolbar>
            </AppBar>
            <Container fixed>
                <Grid container style={{padding: "15px"}}>
                    <AddItemForm addItem={addTodoList}/>
                </Grid>
                <Grid container spacing={5}>
                    {
                        todoLists.map((tl) => {

                            let tasksForTodolist = tasks[tl.id];


                            return <Grid item>
                                <Paper style={{padding: "10px", opacity: "0.8"}}>
                                    <TodoList
                                        key={tl.id}
                                        id={tl.id}
                                        title={tl.title}
                                        tasks={tasksForTodolist}
                                        removeTask={removeTask}
                                        changeFilter={changeFilter}
                                        addTask={addTasks}
                                        changeTaskStatus={changeStatus}
                                        changeTaskTitle={changeTitle}
                                        filter={tl.filter}
                                        removeTodoList={removeTodoList}
                                        changeTodoListTitle={changeTodoListTitle}
                                    />
                                </Paper>
                            </Grid>
                        })
                    }
                </Grid>
            </Container>
        </div>
    );
})


export default App;