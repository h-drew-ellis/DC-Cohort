import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state= {
      name: '',
      place: '',
      info: []
    }
    this.sumbit = this.sumbit.bind(this)
  }

  textBox = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  sumbit() {
    this.setState({
   info: [this.state.name, this.state.place]
    })
  }

  render() {
    const info = this.state.info
    return(
      <div>
      <input name="name" onChange={this.textBox} />
      <input name="place" onChange={this.textBox} />
      <button name="submit" onClick={this.submit}>Sumbit</button>
<h1>{info}</h1></div>
    );
  }
}
export default App;
