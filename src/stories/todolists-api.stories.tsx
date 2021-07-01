import React, {useEffect, useState} from 'react'
import {todolistAPI} from "../api/todolist-api";

export default {
    title: 'API'
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.getTodo()
            .then((res) => {
                setState(res.data);
            })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
        const [state, setState] = useState<any>(null)
        useEffect(() => {
            let title = "IT-Kam";
            todolistAPI.createTodo(title).then((res) => {
                setState(res.data);
            })
        }, [])
        return <div> {JSON.stringify(state)}</div>
    }
export const DeleteTodolist = () => {
        const [state, setState] = useState<any>(null)
        useEffect(() => {
            const todolistId = '734bec12-ea47-4f75-b9a4-8aada39b8393';
            todolistAPI.deleteTodo(todolistId).then((res) => {
                setState(res.data);
            })
        }, [])
        return <div> {JSON.stringify(state)}</div>
    }
export const UpdateTodolistTitle = () => {
        const [state, setState] = useState<any>(null)
        useEffect(() => {
            const todolistId = '47de87e4-e31f-4023-8d26-4b864484df24'
            let title = "SEX MACHINE";
            todolistAPI.updateTitleTodo(todolistId, title)
                .then((res) => {
                    setState(res.data)
                })
        }, [])
        return <div> {JSON.stringify(state)}</div>
    }

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "b713e954-426f-42de-9d03-8d67cca73f00"
        todolistAPI.getTasks(todolistId)
            .then((res) => {
                setState(res.data);
            })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}
export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        let todolistId = 'b713e954-426f-42de-9d03-8d67cca73f00';
        let title = "Hochu cupit PS5!!!"
        todolistAPI.createTask(todolistId, title).then((res) => {
            setState(res.data);
        })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'b713e954-426f-42de-9d03-8d67cca73f00'
        const taskId = '804e44a5-a7a5-4622-a49b-99942d46e6e9'
        todolistAPI.deleteTask(todolistId, taskId).then((res) => {
            setState(res.data);
        })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTaskTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'b713e954-426f-42de-9d03-8d67cca73f00'
        const taskId = '804e44a5-a7a5-4622-a49b-99942d46e6e9'
        let title = "SEX MACHINE";
        todolistAPI.updateTitleTask(todolistId, taskId, title)
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}