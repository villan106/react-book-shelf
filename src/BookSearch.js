import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Link } from 'react-router-dom'

class BookSearch extends React.Component {

	state = {
		books: []
	}

	// is this the correct way to GET the data?
	componentDidMount() {
		BooksAPI.getAll().then((books) => {
			this.setState({ books })
		})
	}
 	// how can I see the APIs returns? only in the React inspector?


	render () {
		return (

			/* search bar */
			<div>
	   			<div className="search-books">
		            <div className="search-books-bar">
		            	<Link to="/" className="close-search">Close</Link>
		            	<div className="search-books-input-wrapper">
		                	<input type="text" placeholder="Search by title or author"/>
		              	</div>
		            </div>
		            <div className="search-books-results">
		            	<ol className="books-grid"></ol>
		            </div>
	          	</div>

	         
	          {/* bookshelves */}
	          	<div className="bookshelf">
	                  <div className="bookshelf-books">
	                    <ol className="books-grid">
	                      <li>

	                  {/* is this the correct way to take API returns and input into rendered component? */}
	                      {this.state.books.map((book) => (

	                        <div className="book" key={book.id}>
	                          <div className="book-top">
	                            <img className="book-cover" key={book.imageLinks.thumbnail} src={book.imageLinks.thumbnail} style={{ width: 128, height: 193 }} alt="book cover"></img>
	                            <div className="book-shelf-changer">
	                              <select>
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

	                        ))}

	                      </li>
	                    </ol>
	                  </div>
	                </div>
	            
	            </div>

       )
	}
}

export default BookSearch

/* state = {
    contacts: []
  }
  componentDidMount() {
    ContactsAPI.getAll().then((contacts) => {
      this.setState({ contacts })
    })
  }
  removeContact = (contact) => {
    this.setState((state) => ({
      contacts: state.contacts.filter((c) => c.id !== contact.id)
    }))

    ContactsAPI.remove(contact)
  }

  createContact(contact) {
    ContactsAPI.create(contact).then(contact => {
      this.setState(state => ({
        contacts: state.contacts.concat([ contact ])
      }))
    })
  }

  */