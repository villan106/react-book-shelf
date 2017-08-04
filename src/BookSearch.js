import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
// import Book from './Book'
// import escapeRegExp from 'escape-string-regexp'
// import sortBy from 'sort-by'



class BookSearch extends React.Component {

  state = {
    query: ''
  }

  // updates state with user inputted query
  updateQuery = (query, maxResults) => {
    BooksAPI.search(query, maxResults).then(response => {
      this.setState({ query: query.trim() })      
    })
  }
 

	render () {
		return (

			/* search bar */
			<div>
	   			<div className="search-books">
		            <div className="search-books-bar">
		            	<Link to="/" className="close-search">Close</Link>
		            	<div className="search-books-input-wrapper">
		                	<input 
		                		type="text" 
		                		placeholder="Search by title or author"
		                		value={this.state.query}
		                		onChange={(event) => this.updateQuery(event.target.value)}
		                	/>
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
	                    
	                	{/* display books here */}
	                	
	                	{/* testing that state changes */}
	                	{JSON.stringify(this.state.query)}
	                    
	                    </ol>
	                  </div>
	                </div>
	            
	            </div>

       )
	}
}

export default BookSearch

