import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': '14b0628e-63da-450d-a3cb-ba811b8ac388'
    }
})

export type TodolistType = {
    id: string
    title: string
    addedDate: string
    order: number
}

export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    data: D
}

export enum TaskStatuses {
    New = 0,
    InProgress = 1,
    Completed = 2,
    Draft = 3
}
export enum TaskPriorities {
    Low = 0,
    Middle = 1,
    Hi = 2,
    Urgently = 3,
    Later = 4
}

export type TaskType = {
    description: string
    title: string
    status: TaskStatuses
    priority: TaskPriorities
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
}

export type UpdateTaskModelType = {
    title: string
    description: string
    status: number
    priority: TaskPriorities
    startDate: string
    deadline: string
}

type GetTasksResponse = {
    error: string | null
    totalCount: number
    items: TaskType[]
}

export type LoginParamsType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: string
}

type AuthMeType = {
    id: number
    email: string
    login: string
}

export const todolistsAPI = {
    getTodolists() {
        return  instance.get<TodolistType[]>('todo-lists');
    },
    createTodolist(title: string) {
        return instance.post<ResponseType<{ item: TodolistType }>>('todo-lists', {title: title});
    },
    deleteTodolist(id: string) {
        return instance.delete<ResponseType>(`todo-lists/${id}`);
    },
    updateTodolist(id: string, title: string) {
        return instance.put<ResponseType>(`todo-lists/${id}`, {title: title});
    },
    getTasks(todolistId: string) {
        return instance.get<GetTasksResponse>(`todo-lists/${todolistId}/tasks`);
    },
    deleteTask(todolistId: string, taskId: string) {
        return instance.delete<ResponseType>(`todo-lists/${todolistId}/tasks/${taskId}`);
    },
    createTask(todolistId: string, taskTitle: string) {
        return instance.post<ResponseType<{item: TaskType}>>(`todo-lists/${todolistId}/tasks`, {title: taskTitle});
    },
    updateTask(todolistId: string, taskId: string, model: UpdateTaskModelType) {
        return instance.put<ResponseType<TaskType>>(`todo-lists/${todolistId}/tasks/${taskId}`, model);
    }
}

export const authAPI = {
    login(data: LoginParamsType) {
        return instance.post<ResponseType<{userId?: number}>>('auth/login', data);
    },
    me() {
        return instance.get<ResponseType<AuthMeType>>('auth/me')
    },
    logout() {
        return instance.delete<ResponseType>('auth/login')
    }
}
