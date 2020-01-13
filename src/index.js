import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

var user ={
    name: "Dan",
    location: "Philly",
    options: []
}
const getLocation = (loc) => {
    // if (loc){
    //     return loc
    // }else{
    //     return "unknown"
    // }
    return loc ? loc : "unknown"
}

//todo list
const onFormSubmit = e => {
    e.preventDefault();
    let option = e.target.elements.option.value;
    if (option){
        user.options.push(option);
        console.log(user.options);
        e.target.elements.option.value = "";
    }
    renderApp();
}

const removeAll = () =>{
    user.options = [];
    renderApp();
}

const pickOne = () => {
    let rand = Math.floor(Math.random()*user.options.length);
    const picked = user.options[rand];
    alert(picked);
};

//counter
let count = 0;
const addOne = () => {
    count++;
    renderApp();
}
const minusOne = () => {
    count--;
    renderApp();
}
const reset = () => {
    count = 0;
    renderApp();
}

//toggle
let vis = true;
const ToggleVis = () => {
    if(vis == true) vis = false
    else vis = true;
    renderApp();
}


function renderApp(){
     let template = <div>
        <h2>Greeting</h2>
        <p>Hello {user.name?user.name.toUpperCase():"unknown"} from
            {getLocation(user.location)}</p>
        
        <h1>Todo List</h1>
        <p>{user.options.length>0?user.options.length+" things": "Nothing todo!"}</p>
        <ol>
            {user.options.map(option => <li key={option}>{option}</li>)}
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option" />
            <button>Add to list</button>
        </form>
        <p>
            <button onClick={removeAll}>Remove all items from list</button>
            <button onClick={pickOne}>Randomly pick a thing</button>
        </p>

         <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>reset</button>

        <h1>Toggle visibilty</h1>
        <button onClick={ToggleVis}>Click to {vis?"reveal":"hide"} secret message</button>
        <p>{vis?"":"Be sure to drink your Olvatine"}</p>
    </div>;

    ReactDOM.render(template, document.getElementById('root'));

}




renderApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
