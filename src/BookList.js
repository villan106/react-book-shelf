import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Link } from 'react-router-dom'

class BookList extends React.Component {

// need constructor and super to scope 'this' properly inside function
constructor(props) {
  super(props);
  this.changeShelf = this.changeShelf.bind(this);
}

  // empty state to be filled with API data
	state = {
    books: [],
  }

  // represents books currently in the shelf
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

/*
  componentWillReceiveProps(nextProps) {
    if(this.props.book.shelf !== nextProps.book.shelf) {
      this.changeShelf(nextProps.book.shelf)
    }
  }
*/
  // ERROR: cannot read property of 'id' undefined - see note above state 

  changeShelf = (book) => {
    this.setState((state) => ({
      books: state.books.filter((b) => b.shelf !== book.shelf)
    }))
    BooksAPI.update(book, book.shelf)
  }

/*
  filterShelf = () => {
    if(this.bookShelf === "Currently Reading"){
      document.getElementById('book').style.display = 'none';
    } else {
      // do nothing
    }
  }
*/



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
                      
                      {this.state.books.map((book) => (
                      <li key={book.id}>

                         <div className="book">
                            <div className="book-top">
                              <div className="book-cover" key={book.imageLinks.thumbnail} style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}} alt="book cover"></div>
                              <div className="book-shelf-changer">
                                <select onChange={this.changeShelf}>
                                  <option value="none" disabled>Move to...</option>
                                  <option value="currentlyReading">Currently Reading</option>
                                  <option value="wantToRead">Want to Read</option>
                                  <option value="read">Read</option>
                                  <option value="none">None</option>
                                </select>
                              </div>
                            </div>
                            <div className="book-title" key={book.title}>{book.title}</div>
                            <div className="book-authors" key={book.authors}>{book.authors}</div>
                          </div>
                        
                        </li>
                      ))}


                    </ol>
                  </div>
                </div>


                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      
                    </ol>
                  </div>
                </div>


                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div className="open-search">
              <Link to="/book-search">Add a book</Link>
            </div>

          </div>

       )
	}
}



export default BookList