import React from 'react';


export default class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        mycar: 'Fiat'
      };
    }
    render() {
      return (
        <form>
        <select value={this.state.mycar}>
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option>
          <option value="Fiat">Fiat</option>
        </select>
        </form>
      );
    }
  }