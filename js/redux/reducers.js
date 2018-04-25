function toggleTodo(todo,action){
    if(todo.id==action.id){
        todo.completed=!todo.completed;
    }
    return todo;
}
function todosReducer(state=[],action){
    var type=action.type;
    switch(type){
        case "ADD_TODO":
            return [...state,{id:action.id,txt:action.txt,completed:false}]
        break;
        case "TOGGLE_TODO":
            return state.map(todo=>toggleTodo(todo,action));
        default:
            return state;
        break;
    }
}

function filterReducer(state="SHOW_ALL",action){
    var type=action.type;
    switch(type){
        case "FILTER_TODO_STATUS":
            return action.filter;
        break;
        default:
            return state;
        break;
    }
}

function reducers(state={},action){
    return {
        todos:todosReducer(state.todos,action),
        filter:filterReducer(state.filter,action)
    };
}

export {reducers}