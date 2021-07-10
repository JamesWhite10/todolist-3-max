import {applyMiddleware, combineReducers, createStore} from "redux";
import {tasksReducer} from "./tasks-reducer";
import thunkMiddleware from "redux-thunk";
import {todolistReducer} from "./todolists-reducer";


const rootReducers = combineReducers({
    todoLists: todolistReducer,
    tasks: tasksReducer,
})

export const store = createStore(rootReducers, applyMiddleware(thunkMiddleware))

export type AppRootState = ReturnType<typeof rootReducers>


// @ts-ignore
window.store = store