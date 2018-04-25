import React from "react";

import AddTodo from "./AddTodo";
import VisibilityTodoList from "../container/VisibilityTodoList";
import FooterLink from "../container/FooterLink";

const AppTodo=()=>(
    <div>
        <AddTodo/>
        <VisibilityTodoList/>
        <FooterLink/>
    </div>
);

export default AppTodo;