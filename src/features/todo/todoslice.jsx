import { createSlice,nanoid } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = {
    todos:[
        {
            id:1,
            text:'Hello World'
        }
    ]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo: (state,action) =>{
            const todo = {
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:()=>{},
    }
});