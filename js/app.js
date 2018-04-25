import { createStore } from "redux";


// let store=createStore((store=0,action={})=>{
//     const type=action.type;
//     switch(type){
//         case "add":
//             return store+1;
//         break;
//         case "dec":
//             return store-1;
//         break;
//         default:
//             return store;
//         break;
//     }
// });
let store=createStore(cresteReducer);

function cresteReducer(store={},action){
    return {
        todo:todo(store.todo,action),
        cacl:calc(store.calc,action)
    };
}


function todo(store={},action={}){
    const type=action.type;
    switch(type){
        case "PRINT":
            return "打印";
        break;
        case "DELETE":
            return "删除";
        break;
        default:
            return store;
        break;
    }
}

function calc(store=0,action={}){
    const type=action.type;
    switch(type){
        case "add":
            return store+1;
        break;
        case "dec":
            return store-1;
        break;
        default:
            return store;
        break;
    }
}


store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch({type:"PRINT"});   //1
store.dispatch({type:"add"});   //2
store.dispatch({type:"add"});   //3
store.dispatch({type:"DELETE"});   //1
store.dispatch({type:"add"});   //4
store.dispatch({type:""});      //4
store.dispatch({type:"PRINT"});   //1
store.dispatch({type:"dec"});   //3
store.dispatch({type:"add"});   //4