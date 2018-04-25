import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import AppTodo from "./component/AppTodo";
import {reducers} from "./redux/reducers";

let store=createStore(reducers);

ReactDOM.render(
    (<Provider store={store}>
        <AppTodo/>
    </Provider>),
    document.getElementById("root")
);