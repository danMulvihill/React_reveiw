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

var template = <div>
        <h1>{user.name?user.name.toUpperCase():"unknown"}</h1>
        <h2>{getLocation(user.location)}</h2>
        <p>{user.options.length>0?user.options.length+" ops": "No options!"}</p>
    </div>;

ReactDOM.render(template, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
