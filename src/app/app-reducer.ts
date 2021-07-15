export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

//status === 'loading' крутилку показываем в остальных нет

const initialState = {
    status: 'loading' as RequestStatusType,
    error: 'ERROR' as string | null
}
export type InitialStateType = typeof initialState
export const appReducer = (state: InitialStateType = initialState, action:
    ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case 'APP/SET-ERROR':
            return {...state, error: action.error}
        default:
            return {...state}
    }
}

export const setAppErrorAC = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const)
export const setAppStatusAC = (status: RequestStatusType) => ({type: 'APP/SET-STATUS', status} as const)

export type SetError = ReturnType<typeof setAppErrorAC>
export type SetAppStatus = ReturnType<typeof setAppStatusAC>

type ActionsType = SetError | SetAppStatus