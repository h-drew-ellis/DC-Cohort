import React from 'react';
import { Component } from 'react';
import Friends from './components/Friends';
import './App.css';

class App extends Component {
    render() {

        let myFriends = ["Who", "What", "I Don't Give A Damn", "I Don't Know", "Today", "Tommorow", "Why", "Because" ]
        return ( 
            <Friends names= {myFriends}/>
        )
    }
}
export default App;