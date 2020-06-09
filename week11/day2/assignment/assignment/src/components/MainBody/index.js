import React, {Component} from 'react';
import './MainBody.css'

class MainBody extends Component {
    constructor() {
        super()
    }

    render() {
        let bookImg = "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/"
        let books = this.props.allBooks.map(book => {


        return(
            <div className="MainBody">
            <a href={book.link}><img className="BookImg" src={bookImg + book.imageLink}/></a>
            <div className="Info">
            <h3>{book.title}</h3>
            <h4>By: <i>{book.author}</i></h4>
            <h5>{book.language}</h5>
            </div>
            </div>

        )
    })

    return (
        <div>{books}</div>
    )
    }
}

export default MainBody