import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import BookSearch from './BookSearch'
import BookList from './BookList'

class BooksApp extends React.Component {
  state = {
    showSearchPage: false
  }

  render() {
    
    return (

      <div className="app">

          <Route exact path="/book-search" render={() => (
            <BookSearch books={this.state.books} /> )} />
          
          <Route exact path="/" component={BookList} />
        
      </div>
    )
  }
}

export default BooksApp
