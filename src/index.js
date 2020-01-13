import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

var user ={
    //name: "Dan",
    location: "Philly",
    options: [5,6,4,76]
}
const getLocation = (loc) => {
    // if (loc){
    //     return loc
    // }else{
    //     return "unknown"
    // }
    return loc ? loc : "unknown"
}


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



function renderApp(){
     let template = <div>
        <h1>{user.name?user.name.toUpperCase():"unknown"}</h1>
        <h2>{getLocation(user.location)}</h2>
        <p>{user.options.length>0?user.options.length+" ops": "No options!"}</p>
         <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>reset</button>
    </div>;

    ReactDOM.render(template, document.getElementById('root'));

}




renderApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
