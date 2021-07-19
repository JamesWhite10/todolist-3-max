import React from 'react'
import classes from'./App.module.css';
import {AppBar, Button, Container, IconButton, LinearProgress, Toolbar, Typography} from '@material-ui/core';
import {Menu} from '@material-ui/icons';
import {TodolistList} from "../features/TodolistList/TodolistList";
import {ErrorSnackbar} from "../components/ErrorSnackbar/ErrorSnackbar";
import {useSelector} from "react-redux";
import {AppRootStateType} from "./store";
import {RequestStatusType} from "./app-reducer";
import { Route } from 'react-router-dom';
import {Login} from "../Login/Login";

function App() {

    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.app.status)

    return (
        <div className={classes.app}>
            <AppBar color={"secondary"} position={"static"}>
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
            {status === "loading" && <LinearProgress color={"primary"}/>}
            <Container fixed>
                <Route exact path={"/"} render={() => <TodolistList/>}/>
                <Route path={"/login"} render={() => <Login/>}/>
                <Route/>

            </Container>
            <ErrorSnackbar/>
        </div>
    )
}

export default App;
