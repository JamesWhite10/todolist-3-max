import {FilterValueType, TodoListType} from "../App";
import {v1} from "uuid";

export type RemoveTodoListAT = {
    type: "REMOVE-TODOLIST"
    todoListID: string
}

export type AddTodoListAT = {
    type: "ADD-TODOLIST"
    title: string
    todolistId: string
}

export type ChangeTodoListTitleAT = {
    type: "CHANGE-TODOLIST-TITLE"
    title: string
    todoListID: string
}

export type ChangeTodoListFilterAT = {
    type: "CHANGE-TODOLIST-FILTER"
    newFilterValue: FilterValueType
    todoListId: string
}

type ActionType = RemoveTodoListAT | AddTodoListAT | ChangeTodoListTitleAT | ChangeTodoListFilterAT

export const todoListsReducer = (todoLists: Array<TodoListType>, action: ActionType): Array<TodoListType> => {
    switch (action.type) {
        case "REMOVE-TODOLIST":
            return todoLists.filter(t => t.id !== action.todoListID)
        case "ADD-TODOLIST":
            const newTodoListID = action.todolistId
            const newTodoList: TodoListType = {
                id: newTodoListID, title: action.title, filter: "all"
            }
            return [...todoLists, newTodoList]
        case "CHANGE-TODOLIST-TITLE":
            return todoLists.map(tl => tl.id === action.todoListID ? {...tl, title: action.title} : tl)
        case "CHANGE-TODOLIST-FILTER":
            return todoLists.map(tl => tl.id === action.todoListId ? {...tl, filter: action.newFilterValue} : tl)
        default:
            return todoLists
    }
}

export const removeTodolistAC = (todolistId: string): RemoveTodoListAT => {
    return { type: 'REMOVE-TODOLIST', todoListID: todolistId}
}
export const addTodolistAC = (title: string): AddTodoListAT => {
    return { type: 'ADD-TODOLIST', title, todolistId: v1()}
}
export const changeTodolistTitleAC = (title: string, todolistId: string): ChangeTodoListTitleAT => {
    return { type: 'CHANGE-TODOLIST-TITLE', title: title, todoListID: todolistId}
}
export const changeTodolistFilterAC = (newFilterValue: FilterValueType, todolistId: string): ChangeTodoListFilterAT => {
    return { type: 'CHANGE-TODOLIST-FILTER', newFilterValue: newFilterValue, todoListId: todolistId}
}