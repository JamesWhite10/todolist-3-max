import {addTaskAC, changeTaskTitleAC, setTasksAC, tasksReducer} from './tasks-reducer';
import {TasksStateType} from '../App';
import {addTodolistAC, removeTodolistAC, setTodolistAC} from "./todolists-reducer";
import {TaskPriorities, TaskStatuses} from "../api/todolist-api";
import {v1} from "uuid";


let startState: TasksStateType

beforeEach(() => {
    startState = {
        "todolistId1": [
            {
                id: v1(), title: "CSS", status: TaskStatuses.New, todoListId: "todolistId",
                priority: TaskPriorities.Low, order: 0, addedDate: "", startDate: "", deadline: "", description: ""
            },
            {
                id: v1(), title: "JS", status: TaskStatuses.New, todoListId: "todolistId",
                priority: TaskPriorities.Low, order: 0, addedDate: "", startDate: "", deadline: "", description: ""
            },
            {
                id: v1(), title: "React", status: TaskStatuses.New, todoListId: "todolistId",
                priority: TaskPriorities.Low, order: 0, addedDate: "", startDate: "", deadline: "", description: ""
            }
        ],
        "todolistId2": [
            {
                id: v1(), title: "bread", status: TaskStatuses.New, todoListId: "todolistId",
                priority: TaskPriorities.Low, order: 0, addedDate: "", startDate: "", deadline: "", description: ""
            },
            {
                id: v1(), title: "milk", status: TaskStatuses.New, todoListId: "todolistId",
                priority: TaskPriorities.Low, order: 0, addedDate: "", startDate: "", deadline: "", description: ""
            },
            {
                id: v1(), title: "tea", status: TaskStatuses.New, todoListId: "todolistId",
                priority: TaskPriorities.Low, order: 0, addedDate: "", startDate: "", deadline: "", description: ""
            }
        ]
    };
})

test('correct task should be added to correct array', () => {

    const action = addTaskAC("juce", "todolistId2");

    const endState = tasksReducer(startState, action)

    expect(endState["todolistId1"].length).toBe(3);
    expect(endState["todolistId2"].length).toBe(4);
    expect(endState["todolistId2"][0].id).toBeDefined();
    expect(endState["todolistId2"][0].title).toBe("juce");
    expect(endState["todolistId2"][0].status).toBe(TaskStatuses.New);
})

test('title of specified task should be changed', () => {

    const action = changeTaskTitleAC("2", "milk", "todolistId2");
    const endState = tasksReducer(startState, action)
    expect(endState['todolistId2'][1].title).toBe("milk");
    expect(endState['todolistId1'][1].title).toBe("JS")
});

test('new array should be added when new todolist is added', () => {

    const action = addTodolistAC("new todolist");
    const endState = tasksReducer(startState, action)

    //const keys1 = Object.keys(startState)//["todolistId1", "todolistId2"]
    const keys = Object.keys(endState);

    const newKey = keys.find(k => k !== "todolistId1" && k !== "todolistId2");
    if (!newKey) {
        throw Error("new key should be added")
    }
    expect(keys.length).toBe(3);
    expect(endState[newKey]).toEqual([]);
});

test('property with todolistId should be deleted', () => {

    const action = removeTodolistAC("todolistId2");
    const endState = tasksReducer(startState, action)
    const keys = Object.keys(endState);
    expect(keys.length).toBe(1);
    expect(endState["todolistId2"]).toBeUndefined();
});
test('empty arrays should be added when set todolist', () => {
    const action = setTodolistAC([
        {id: "1", title: "title 1", addedDate: "", order: 0},
        {id: "2", title: "title 2", addedDate: "", order: 1}
    ])

    const endState = tasksReducer({}, action)

    const keys = Object.keys(endState)

    expect(keys.length).toBe(2)
    expect(endState["1"]).toStrictEqual([])
    expect(endState["2"]).toStrictEqual([])
})
test('tasks should be added for todolist', () => {
    const action = setTasksAC(startState["todolistId1"], "todolistId1")

    const endState = tasksReducer({
        "todolistId2": [],
        "todolistId1": []
    }, action)

    expect(endState["todolistId1"].length).toBe(3)
    expect(endState["todolistId2"].length).toBe(0)
})
