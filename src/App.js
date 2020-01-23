import React from 'react';
import MyForm from './form';
import Login from './login.js';
import planets from './planets';
import Planet from './planetcomp';
import './App.css';

const Title = <h1>Planets</h1>;

class TodoApp extends React.Component{
  constructor(){
    super()
    this.state = {
      name: "Pluto"
    }
  }
  render() {
    const planet = planets.map((p, i)=><li key={i}>{p}</li>)
    return <div>
        <Login />
        <h1>{Title}</h1>
        <h3>State: {this.state.name}</h3>
            <Planet planet = {planet} />
            <MyForm />
        </div>
  }
}



export default TodoApp;
