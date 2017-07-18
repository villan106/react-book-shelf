import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Link } from 'react-router-dom'

class BookSearch extends React.Component {

	state = {

	}

	render () {
		return (
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
       )
	}
}

export default BookSearch