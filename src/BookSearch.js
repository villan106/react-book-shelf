import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Link } from 'react-router-dom'

class BookSearch extends React.Component {

 	


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