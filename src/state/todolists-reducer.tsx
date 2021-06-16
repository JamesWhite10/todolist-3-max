import {v1} from "uuid";
import {FilterValuesType, TodoListType} from "../AppWithRedux";

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
    newFilterValue: FilterValuesType
    todoListID: string
}

type ActionsTypes = RemoveTodoListAT | AddTodoListAT | ChangeTodoListTitleAT | ChangeTodoListFilterAT

export let todolistId1 = v1();
export let todolistId2 = v1();

const InitialState: Array<TodoListType> = [
    {id: todolistId1, title: "What to learn", filter: "all"},
    {id: todolistId2, title: "What to buy", filter: "all"},
]



export const todoListsReducer = (state: Array<TodoListType> = InitialState, action: ActionsTypes): Array<TodoListType> => {
    switch (action.type) {
        case 'REMOVE-TODOLIST': {
            return state.filter(tl => tl.id !== action.todoListID)
        }
        case 'ADD-TODOLIST': {
            return [{
                id: action.todolistId,
                filter: "all",
                title: action.title
            }, ...state]
        }
        case 'CHANGE-TODOLIST-TITLE': {
            const todoList = state.find(tl => tl.id === action.todoListID)
            if (todoList) {
                todoList.title = action.title;
            }
            return [...state]
        }
        case 'CHANGE-TODOLIST-FILTER': {
            const todoList = state.find(tl => tl.id === action.todoListID)
            if (todoList) {
                todoList.filter = action.newFilterValue;
            }
            return [...state]
        }
        default:
            return state
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
export const changeTodolistFilterAC = (newFilterValue: FilterValuesType, todolistId: string): ChangeTodoListFilterAT => {
    return { type: 'CHANGE-TODOLIST-FILTER', newFilterValue: newFilterValue, todoListID: todolistId}
}