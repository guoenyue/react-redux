import React from "react";
import {connect} from "react-redux";
import {addTodo} from "../redux/actions";

let AddTodo=({dispatch})=>{
    let input;
    return (
        <form onSubmit={e=>{
                e.preventDefault();
                if(!input.value.trim()){
                    return ;
                }
                let id=Math.random()*3429039;
                dispatch(addTodo(id,input.value));
                input.value=="";
            }}>
            <input type="text" ref={node=>input=node}/>
            <button type="submit">Add Todo</button>
        </form>
    );
}
AddTodo=connect()(AddTodo);
export default AddTodo;