function addTodo(id,txt){
    return {
        type:"ADD_TODO",
        id:id,
        txt:txt
    };
}

function toggleTodo(id){
    return {
        type:"TOGGLE_TODO",
        id:id
    }
}

function changeFilter(filter){
    return {
        type:"FILTER_TODO_STATUS",
        filter:filter
    };
}


export {addTodo,toggleTodo,changeFilter};


