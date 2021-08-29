import {v1} from 'uuid';
import {
    addTodolistAC, changeTodolistEntityStatusAC, changeTodolistFilterAC,
    changeTodolistTitleAC, FilterValuesType,
    removeTodolistAC, setTodolistAC, TodolistDomainType, todolistReducer
} from "../features/TodolistList/todolists-reducer";
import {RequestStatusType} from "../app/app-reducer";

let todolistId1 = v1();
let todolistId2 = v1();
let startState: Array<TodolistDomainType> = []

beforeEach(() => {
    todolistId1 = v1()
    todolistId2 = v1()
    startState = [
        {id: todolistId1, title: "What to learn", filter: "all", entityStatus: "idle", addedDate: "", order: 0},
        {id: todolistId2, title: "What to buy", filter: "all", entityStatus: "idle", addedDate: "", order: 1}
    ]
})

test('correct todolist should be removed', () => {

    const endState = todolistReducer(startState, removeTodolistAC({id: todolistId1}))

    expect(endState.length).toBe(1);
    expect(endState[0].id).toBe(todolistId2);
});

test('correct todolist should be added', () => {

    let todolist = {
        id: 'dwefrvevr',
        order: 0,
        title: 'New todolist',
        addedDate: ''
    }

    const endState = todolistReducer(startState, addTodolistAC({todolist}))
    expect(endState.length).toBe(3);
    expect(endState[0].title).toBe(todolist.title);
    expect(endState[2].filter).toBe("all");
});

test('correct todolist should change its name', () => {

    let newTodolistTitle = "What to buy";

    const action = changeTodolistTitleAC({title: newTodolistTitle, id: todolistId2})

    const endState = todolistReducer(startState, action);
    expect(endState[0].title).toBe("What to learn");
    expect(endState[1].title).toBe(newTodolistTitle);
    expect(endState.length).toBe(2);
});

test('correct filter of todolist should be changed', () => {

    let newFilter: FilterValuesType = "completed";

    const action = changeTodolistFilterAC({id: todolistId1 ,filter: newFilter})

    const endState = todolistReducer(startState, action);
    expect(endState[0].filter).toBe("completed");
    expect(endState[1].filter).toBe("all");
});
test('todolist should be set to the state', () => {

    const action = setTodolistAC({todolist: startState})

    const endState = todolistReducer([], action)

    expect(endState.length).toBe(2)
})
test('correct entity status of todolist should be changed', () => {

    let newStatus: RequestStatusType = 'loading';

    const action = changeTodolistEntityStatusAC({id: todolistId2 ,status: newStatus})

    const endState = todolistReducer(startState, action);

    expect(endState[0].entityStatus).toBe('idle');
    expect(endState[1].entityStatus).toBe('loading');
});