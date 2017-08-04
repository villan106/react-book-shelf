import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import BookSearch from './BookSearch'
import BookList from './BookList'

class BooksApp extends React.Component {
  
  // so search doesn't show up at BookList
  state = {
    showSearchPage: false,
    books: []
  }

  render() {
    
    return (

      <div className="app">

          <Route exact path="/" render={() => (
            <BookList books={this.state.books} /> )} />

          <Route exact path="/search" render={() => (
            <BookSearch books={this.state.books} query={this.state.query} /> )} />
          
      </div>
    )
  }
}

export default BooksApp
