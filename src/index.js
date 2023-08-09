import React from "react";
import {createRoot} from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css"

import { createStore } from "redux";

const initialState = ['redux', 'react', 'webpack']

const store = createStore(showInfo)

const items = document.querySelector('.testUl');
const testBtn = document.querySelector('.testButton')
const inputValue = document.querySelector('.testInput');

function showInfo(state=initialState, action){
    switch(action.type){
        case "GET_LIBRARY":
            console.log(state, action)
            return state.map(item => item.includes(action.payload)? item: null)
            break;
    }
}

testBtn.addEventListener("click", () => {
    console.log(inputValue.value)
    store.dispatch({ type: "GET_LIBRARY", payload: inputValue.value})
})

store.subscribe(() => {
    items.innerHTML = ''

    document.querySelector('.testInput').value = ''
        store.getState().map(item => {
        const li = document.createElement('li');
        li.textContent = item;
        items.appendChild(li)
    })
})


const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <div>Hello world</div>
);