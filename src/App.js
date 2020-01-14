import React from 'react';


import './App.css';


class TodoApp extends React.Component{
  render(){
    const t = "Todo List";
    const d = "This is from the App.js file and"+7+9;
    const ops = ["drink coffee", "work", "go to bed"];
    return <div>
      <Header title = {t} description = {d}/>
      <Action />
      <Options options = {ops} />
      <AddOption />
    </div>
  }
}

class Header extends React.Component{
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.props.title}</h1>
          <p>{this.props.description}</p>
          
        </header>
      </div>
    );
  }
}

class Action extends React.Component{
  handlePick(){
    alert("Do it!");
  }
  render(){
    return <div>
      <button onClick={this.handlePick}>>What should I do</button>
    </div>
  }
} 

class Options extends React.Component {
  handleRemove(){
    console.log("all gone")
  }
  render(){
    return <div>
      <p>You have {this.props.options.length} things to do:</p>
      <ol>
  {this.props.options.map((op) => <Option key={op} option={op} />)}
      </ol>
      <button onClick={this.handleRemove}>Remove everything</button>
    </div>
  }
}

class Option extends React.Component{
  render(){
    return <li>{this.props.option}</li>
  }
}

class AddOption extends React.Component {
  onFormSubmit(e){
    e.preventDefault();
    let option = e.target.elements.option.value;
    if (option){
        // user.options.push(option);
        console.log(option);
        e.target.elements.option.value = "";
    }
  }
  render(){
    return <div>
        <form onSubmit={this.onFormSubmit}>
            <input type="text" name="option" />
            <button>Add to list</button>
        </form>
    </div>
  }
}

const fullApp = <div>
  <Header />
  <Action />
  <Options />
  <AddOption />
</div>

export default TodoApp;
