import React from "react";

const Todo=({id,txt,completed,clickEvent})=>{
    return (
        <li style={{textDecoration:completed?"line-through":"none"}} onClick={()=>clickEvent(id)}>
            {txt}
        </li>
    )
}

const TodoList=({todos,onTodoClick})=>{
    return (
        <ul>
            {todos.map(todo=>(<Todo key={todo.id} {...todo} clickEvent={onTodoClick}/>))}
        </ul>
    );
};

export default TodoList;