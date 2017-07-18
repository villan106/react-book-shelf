import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import BookSearch from './BookSearch'
import BookList from './BookList'

class BooksApp extends React.Component {
  state = {
    showSearchPage: false
  }

  render() {
    
    return (

      <div className="app">

          <Route exact path="/book-search" component={BookSearch} />
          <Route exact path="/" component={BookList} />
        
      </div>
    )
  }
}

export default BooksApp
