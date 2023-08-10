import React from "react";
import {createRoot} from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css"

import { createStore } from "redux";

import {Provider} from "react-redux";

import AppRedux from "./components/AppRedux";

const initialState = ['redux', 'react', 'webpack']

const store = createStore(showInfo)

// const items = document.querySelector('.testUl');
// const searchBtn = document.querySelector('.testButton')
// const inputValue = document.querySelector('.testInput');
// const clearBtn = document.querySelector('.clearButton')

function showInfo(state=initialState, action){
    switch(action.type){
        case "GET_LIBRARY":
            const newState = state
                .map(item => item.includes(action.payload)? item : undefined)
                .filter(item => item !== undefined)
            console.log(newState)
            return newState
        case "SET_INITIAL":
            console.log('INITIAL STATE SET')
            return initialState
        default: return state
    }
}

// searchBtn.addEventListener("click", () => {
//     store.dispatch({ type: "GET_LIBRARY", payload: inputValue.value})
// })
//
// clearBtn.addEventListener("click", () => {
//     inputValue.value = ''
//     console.log('clear')
//     store.dispatch({ type: "SET_INITIAL" })
// })
//
// store.subscribe(() => {
//     items.innerHTML = ''
//
//     store.getState().map(item => {
//         if (item){
//             const li = document.createElement('li');
//             li.textContent = item;
//             items.appendChild(li)
//         }
//     })
// })


const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <AppRedux />
    </Provider>
);