import {Dispatch} from 'redux'
import {todolistsAPI, TodolistType} from "../api/todolist-api";

const initialState: Array<TodolistDomainType> = []

export const todolistReducer = (state: Array<TodolistDomainType> = initialState, action: ActionsType): Array<TodolistDomainType> => {
    switch (action.type) {
        case 'REMOVE-TODOLIST':
            return state.filter(tl => tl.id !== action.id)
        case 'ADD-TODOLIST':
            return [{...action.todolist, filter: 'all'}, ...state]
        case 'CHANGE-TODOLIST-TITLE':
            return state.map(tl => tl.id === action.id ? {...tl, title: action.title} : tl)
        case 'CHANGE-TODOLIST-FILTER':
            return state.map(tl => tl.id === action.id ? {...tl, filter: action.filter} : tl)
        case 'SET-TODOLIST':
            return action.todolist.map((tl: any) => ({...tl, filter: 'all', entityStatus: 'idle'}))
        default:
            return state
    }
}

// actions
export const removeTodolistAC = (id: string) => ({type: 'REMOVE-TODOLIST', id} as const)
export const addTodolistAC = (todolist: TodolistType) => ({type: 'ADD-TODOLIST', todolist} as const)
export const changeTodolistTitleAC = (id: string, title: string) => ({
    type: 'CHANGE-TODOLIST-TITLE',
    id,
    title
} as const)
export const changeTodolistFilterAC = (id: string, filter: FilterValuesType) => ({
    type: 'CHANGE-TODOLIST-FILTER',
    id,
    filter
} as const)
export const setTodolistAC = (todolist: Array<TodolistType>) => ({type: 'SET-TODOLIST', todolist} as const)

// thunks
export const fetchTodolistTC = () => {
    return (dispatch: Dispatch<ActionsType>) => {
        todolistsAPI.getTodolist()
            .then((res) => {
                dispatch(setTodolistAC(res.data))
            })
    }
}

// types
export type AddTodolistAT = ReturnType<typeof addTodolistAC>;
export type RemoveTodolistAT = ReturnType<typeof removeTodolistAC>;
export type SetTodolistAT = ReturnType<typeof setTodolistAC>;

type ActionsType =
    | RemoveTodolistAT
    | AddTodolistAT
    | ReturnType<typeof changeTodolistTitleAC>
    | ReturnType<typeof changeTodolistFilterAC>
    | SetTodolistAT

export type FilterValuesType = 'all' | 'active' | 'completed';
export type TodolistDomainType = TodolistType & {
    filter: FilterValuesType
}
