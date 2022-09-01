import { DELETE_TASK , ADD_TASK } from "./actionTypes";

const init= {
    tasks: [
        { id:Math.random(), action:"learn react",isDone:true},
        { id:Math.random(), action:"learn redux",isDone:false},
    ],
    filter:false
};

const reducer =(state=init,{type,payload}) => {
    switch (type){
        case DELETE_TASK:
            return{
                ...state,tasks:state.tasks.filter(el=>el.id!==payload)
};
case ADD_TASK:
    return {
        ...state,tasks:[...state.tasks,payload],
    };
default:
    return state;
}
};
export default reducer;