import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import Book from './Book'
// import escapeRegExp from 'escape-string-regexp'
// import sortBy from 'sort-by'



class BookSearch extends React.Component {


  state = {
    query: '',
  }

  updateQuery = query => {
  	this.setState({ query: query.trim() })
  }

	render () {

		// destructuring props so can be called without 'this.props'
	    const { books, submitQuery, changeShelf } = this.props
	    const { query } = this.state

/*
	    // applying RegExp & sortBy to sort returns
	    let showingBooks
	    if (query) {
	    	const match = new RegExp(escapeRegExp(query), 'i')
			showingBooks = books.filter((book) => match.test(book.id))
		} else {
			showingBooks = books
	    }

	    showingBooks.sort(sortBy('title'))
*/
		return (

			/* search bar */
			<div>
	   			<div className="search-books">
		            <div className="search-books-bar">
		            	<Link to="/" className="close-search">Close</Link>
		            	<form className="search-books-input-wrapper" onChange={(event) => submitQuery(event.target.value)} >
		                	<input 
		                		type="text" 
		                		placeholder="Search by title or author"
		                		value={query}
		                		onChange={(event) => this.updateQuery(event.target.value)}
		                	/>
		              	</form>
		            </div>
		            <div className="search-books-results">
		            	<ol className="books-grid"></ol>
		            </div>
	          	</div>

	         
	          {/* bookshelves */}
	          	<div className="bookshelf">
	                  <div className="bookshelf-books">
	                    <ol className="books-grid">

	                	{books.map((book) => <Book key={book.id} book={book} changeShelf={changeShelf} /> )}
	                    
	                    </ol>
	                  </div>
	                </div>
	            
	            </div>

       )
	}
}

export default BookSearch

