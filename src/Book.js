import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'

class Book extends React.Component {


 
	render(){
		return(

		  {/* use this.props when receiving props from parent component */}
	      <li key={this.props.book.id}>
	         <div className="book">
	            <div className="book-top">
	              <div className="book-cover" key={this.props.book.imageLinks.thumbnail} style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.thumbnail})`}} alt="book cover"></div>
	              <div className="book-shelf-changer">
	                <select onChange={(event) => this.props.changeShelf(this.props.book, event.target.value)} defaultValue={this.props.book.shelf}>
	                  <option value="none" disabled>Move to...</option>
	                  <option value="currentlyReading">Currently Reading</option>
	                  <option value="wantToRead">Want to Read</option>
	                  <option value="read">Read</option>
	                  <option value="none">None</option>
	                </select>
	              </div>
	            </div>
	            <div className="book-title" key={this.props.book.title}>{this.props.book.title}</div>
	            <div className="book-authors" key={this.props.book.authors}>{this.props.book.authors}</div>
	          </div>
	        
	        </li>
	      
		)
	}
}


export default Book