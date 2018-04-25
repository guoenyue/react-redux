import React from "react";
import {connect} from "react-redux";

import TodoList from "../component/TodoList";
import {toggleTodo} from "../redux/actions";

function mapStateToProps(state){
    switch(state.filter){
        case "SHOW_ALL":
            return {todos:state.todos};
        case "SHOW_COMPLETED":
            return {todos:state.todos.filter(item=>item.completed)}
        case "SHOW_ACTIVE":
            return {todos:state.todos.filter(item=>!item.completed)}
        default:
            return {todos:state.todos};
    }
}

function mapDispatchToProps(dispatch){
    return {
        onTodoClick:function(id){
            dispatch(toggleTodo(id));
        }
    };
}


let VisibilityTodoList=connect(mapStateToProps,mapDispatchToProps)(TodoList);

export default VisibilityTodoList;