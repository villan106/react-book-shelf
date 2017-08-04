import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Link } from 'react-router-dom'
import Book from './Book'

class BookList extends React.Component {

// need constructor and super to scope 'this' properly inside function
constructor(props) {
  super(props);
  this.changeShelf = this.changeShelf.bind(this);
}

  state = {
    books: []
  }

  // represents books currently in the shelf
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  // BooksAPI needs book object and shelf string, so need to pass it to changeShelf
  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(response => {
      book.shelf = shelf
      this.setState((state) => ({
        books: state.books.filter((b) => b.id !== book.id).concat([ book ])
      }))      
    })
  }


	render () {
		return (
   	

  		<div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>


                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">

                    {/* must bind changeShelf func for it to be passed as a prop to Book.js */}
                    {this.state.books.filter(book => book.shelf === 'currentlyReading').map((book) => <Book key={book.id} book={book} changeShelf={this.changeShelf.bind(this)} />)}

                    </ol>
                  </div>
                </div>


                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      
                    {this.state.books.filter(book => book.shelf === 'wantToRead').map((book) => <Book key={book.id} book={book} changeShelf={this.changeShelf.bind(this)} />)}

                    </ol>
                  </div>
                </div>


                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      
                    {this.state.books.filter(book => book.shelf === 'read').map((book) => <Book key={book.id} book={book} changeShelf={this.changeShelf.bind(this)} />)}

                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>

          </div>

       )
	}
}



export default BookList