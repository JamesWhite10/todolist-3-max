import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./TodoList";
import {v1} from "uuid";
import {AddItemForm} from "./AddItemForm";
import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";

export type TaskType = {
    id: string,
    title: string,
    isDone: boolean
}

export type TodoListType = {
    id: string,
    title: string
    filter: FilterValueType
}

export type TasksStateType = {
    [key: string]: Array<TaskType>
}

export type FilterValueType = "all" | "active" | "completed"

function App() {

    let todoListId1 = v1();
    let todoListId2 = v1();

    let [todoLists, setTodoLists] = useState<Array<TodoListType>>([
        {id: todoListId1, title: "What to learn", filter: "all"},
        {id: todoListId2, title: "What to buy", filter: "all"}
    ])

    let [tasks, setTasks] = useState<TasksStateType>({
        [todoListId1]: [
            {id: v1(), title: "HTML & Css", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false}
        ],
        [todoListId2]: [
            {id: v1(), title: "Milk", isDone: true},
            {id: v1(), title: "React book", isDone: true},
            {id: v1(), title: "Lemon", isDone: false},
            {id: v1(), title: "Wine", isDone: true}
        ]
    })

    function removeTask(id: string, todoListId: string) {
        let todoListTasks = tasks[todoListId];
        tasks[todoListId] = todoListTasks.filter(t => t.id !== id);
        setTasks({...tasks})
    }

    function addTask(title: string, todoListId: string) {
        let task = {id: v1(), title, isDone: false};
        let todoListTasks = tasks[todoListId]
        tasks[todoListId] = [task, ...todoListTasks]
        setTasks({...tasks})
    }

    function changeFilter(value: FilterValueType, todoListId: string) {
        let todoList = todoLists.find(tl => tl.id === todoListId);
        if (todoList) {
            todoList.filter = value;
            setTodoLists([...todoLists])
        }
    }

    function changeStatus(id: string, isDone: boolean, todoListId: string) {
        let todoListTasks = tasks[todoListId]
        let task = todoListTasks.find(t => t.id === id);
        if (task) {
            task.isDone = isDone;
            setTasks({...tasks})
        }
    }

    function changeTaskTitle(taskId: string, newTitle: string, todolistId: string) {
        let newTasks = tasks[todolistId];
        let task = newTasks.find(t => t.id === taskId);
        if (task) {
            task.title = newTitle;
            setTasks({...tasks});
        }
    }

    function removeTodoList(id: string) {
        setTodoLists(todoLists.filter(tl => tl.id !== id));
        delete tasks[id];
        setTasks({...tasks});
    }

    function changeTodoListTitle(id: string, newTitle: string) {
        const todoList = todoLists.find(tl => tl.id === id)
        if (todoList) {
            todoList.title = newTitle
            setTodoLists([...todoLists])
        }
    }

    function addTodoList(title: string) {
        let newTodoListId = v1();
        let newTodoList: TodoListType = {id: newTodoListId, title: title, filter: "all"};
        setTodoLists([newTodoList, ...todoLists]);
        setTasks({
            ...tasks,
            [newTodoListId]: []
        })
    }

    return (
        <div className="App">
            <AppBar position={"static"}>
                <Toolbar style={{justifyContent: "space-between"}}>
                    <IconButton edge={"start"} color={"inherit"} aria-label={"menu"}>
                        <Menu/>
                    </IconButton>
                        <Typography variant={"h6"}>
                            TodoList
                        </Typography>
                        <Button color={"inherit"} variant="outlined">Login</Button>
                </Toolbar>
            </AppBar>
            <Container fixed>
                <Grid container style={{padding: "20px 0"}}>
                    <AddItemForm addItem={addTodoList}/>
                </Grid>
                <Grid container={true} spacing={4}>
                    {
                        todoLists.map(tl => {
                            let allTodoListTasks = tasks[tl.id]
                            let tasksForTodoList = allTodoListTasks

                            if (tl.filter === "active") {
                                tasksForTodoList = allTodoListTasks.filter(t => !t.isDone)
                            }
                            if (tl.filter === "completed") {
                                tasksForTodoList = allTodoListTasks.filter(t => t.isDone)
                            }
                            return <Grid item key={tl.id}>
                                <Paper elevation={10} style={{padding: "10px", backgroundColor: "papayawhip"}}>
                            <TodoList
                                key={tl.id}
                                id={tl.id}
                                title={tl.title}
                                tasks={tasksForTodoList}
                                removeTask={removeTask}
                                changeFilter={changeFilter}
                                addTask={addTask}
                                changeTaskStatus={changeStatus}
                                changeTaskTitle={changeTaskTitle}
                                changeTodoListTitle={changeTodoListTitle}
                                filter={tl.filter}
                                removeTodoList={removeTodoList}
                            />
                                </Paper>
                        </Grid>
                        })
                    }
                </Grid>
            </Container>
        </div>
)
}


export default App;

