import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': '1f8bceb1-8e01-4532-aa69-076eda261e41'
    }
})

type CommonResponseType<T = {}> = {
    resultCode: number
    fieldsErrors: string[]
    messages: Array<string>
    data: T
}

type TodoListType = {
    id: string
    title: string
    addedDate: string
    order: number
}


export const todolistAPI = {
    getTodo() {
        return  instance.get<TodoListType[]>('todo-lists')
    },
    createTodo() {
        return instance.post<CommonResponseType<{item: TodoListType}>>('todo-lists', {title:
                "React"})
    },
    deleteTodo(todolistId: string) {
        return instance.delete<CommonResponseType>(`todo-lists/${todolistId}`)
    },
    updateTitleTodo(todolistId: string, title: string) {
        return instance.put<CommonResponseType>(`todo-lists/${todolistId}`, {title: title})
    }
}