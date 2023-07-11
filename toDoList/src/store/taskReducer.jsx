import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const defaultState = {
    tasks: JSON.parse(localStorage.getItem("tasks")) == null ? []
            : JSON.parse(localStorage.getItem("tasks"))
};

export const ADD_NEW_TASK = "list/addNewTask";
export const DELETE_TASK = "list/deleteTask";

function taskReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_NEW_TASK:
            localStorage.setItem('tasks', JSON.stringify([...state.tasks, action.payload]));
            return { ...state, tasks: [...state.tasks, action.payload], };
        case DELETE_TASK:
            const filteredTasks = state.tasks.filter((el) => el.id !== action.payload.id);
            localStorage.setItem('tasks', JSON.stringify(filteredTasks));
            return { ...state, tasks: filteredTasks };
        default:
            return state;
    }
}

export let store = createStore(taskReducer, composeWithDevTools());