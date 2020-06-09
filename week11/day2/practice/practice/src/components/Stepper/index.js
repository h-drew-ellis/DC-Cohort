import React, { Component} from "react";
import "./Stepper.css"

class Stepper extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }

        this.countUpButton = this.countUpButton.bind(this);
        this.countDownButton = this.countDownButton.bind(this);
    }

    countUpButton() {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    countDownButton() {
        this.setState({
            counter: this.state.counter - 1
        })

    }
    render() {

        return(
        <div>
        <button className="addButton" onClick= { this.countUpButton }>+</button>
        <button className="minusButton" onClick= { this.countDownButton }>-</button>
        <h2>{this.state.counter}</h2>
        <button className="minusButton" onClick= { this.countDownButton }>-</button>
        
        </div>
        )
    }
}

export default Stepper