import React, {Component} from 'react';
import "./banner.css"

class Banner extends Component {
    /*constructor() {
        super()
    }*/

    render() {
        return(
            <div className="header">
            <h1>Some Book App</h1>
            <a className="redirect" href="https://www.google.com">Home</a>
            <a className="redirect" href="https://www.google.com">My Books</a>
            <a className="redirect" href="https://www.google.com">Browse</a>
            <a className="redirect" href="https://www.google.com">Community</a>
            <a className="auth" href="https://www.google.com">Sign In</a>
            <a className="auth" href="https://www.google.com">Register</a>
            </div>
        )
    }
}

export default Banner