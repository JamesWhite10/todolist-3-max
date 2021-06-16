import {combineReducers, createStore} from "redux";
import {todoListsReducer} from "./todolists-reducer";
import {tasksReducer} from "./tasks-reducer";


const rootReducers = combineReducers({
    todoLists: todoListsReducer,
    tasks: tasksReducer,
})

export const store = createStore(rootReducers)

export type AppRootState = ReturnType<typeof rootReducers>


// @ts-ignore
window.store = store