import React, { Component } from "react";
import "./header.css";

class header extends Component {
  render() {
    return (
      <div className="header">
        <img src={logo} className="logo" alt="logo" />
        <h4>HighOnCoding</h4>
        <span>
          <a className="hrefLink" href="http://highoncoding.com">
            Home
          </a>
        </span>
        <span>
          <a className="hrefLink" href="http://highoncoding.com/Articles/List">
            Articles
          </a>
        </span>
      </div>
    );
  }
}

export default header;
