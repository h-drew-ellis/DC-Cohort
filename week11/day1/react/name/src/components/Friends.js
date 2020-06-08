import React, { Component } from "react"

class Friends extends Component {
render() {
    let list = this.props.names.map(name => { 
        return <li className="name-item">{name}</li>
    })
    return (
        <ul>{list}</ul>
    )
}
}

export default Friends