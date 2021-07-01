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
// здесь мы будем делать запрос и ответ закидывать в стейт.
// который в виде строки будем отображать в div-ке
    }, [])
    return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist =
    () => {
        const [state, setState] = useState<any>(null)
        useEffect(() => {
    todolistAPI.createTodo().then( (res) => {
                setState(res.data);
            } )
        }, [])
        return <div> {JSON.stringify(state)}</div>
    }
export const DeleteTodolist =
    () => {
        const [state, setState] = useState<any>(null)
        useEffect(() => {
            const todolistId = '734bec12-ea47-4f75-b9a4-8aada39b8393';
            todolistAPI.deleteTodo(todolistId).then( (res) => {
                setState(res.data);
            })
        }, [])
        return <div> {JSON.stringify(state)}</div>
    }
export const UpdateTodolistTitle =
    () => {
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