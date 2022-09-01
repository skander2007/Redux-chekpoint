import { ADD_TASK, DELETE_TASK  } from "./actionTypes";


export const deleteTask =(id)=> {
    return {
        type: DELETE_TASK,
        payload:id,
    };
};

export const addTask = (newTask) => {
    return {
        type:ADD_TASK,
        payload:newTask,
    };
};