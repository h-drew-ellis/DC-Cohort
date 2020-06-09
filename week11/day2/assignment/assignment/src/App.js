import React, { Component } from 'react';
import Banner from './components/Banner'
import MainBody from './components/MainBody'
//import SearchBar from './components/SearchBar'
import Language from './components/Language'
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      books: [],
      languages: []
      }
    }

    filterLanguage = (languages) => {
      let uniqueLanguages = []
      for (let i = 0; i < languages.length; i++){
        if( !uniqueLanguages.includes(languages[i])) {
          uniqueLanguages.push(languages[i])
        }
      }
      return uniqueLanguages
    }
  
    componentDidMount() {
      fetch("https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json")
      .then(response => response.json())
      .then(result => {
        let languages = result.map(book => { return book.language})
        this.setState({
          books: result,
          languages: this.filterLanguage(languages)
          }
        )
      })
    }
  render() {
  return (
    <div className="App">
      <Banner />
      <Language languages = {this.state.languages}/>
      <MainBody allBooks = {this.state.books}/>
    </div>
  );
  }
}

export default App;
