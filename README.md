# A React Bookshelf

This is a simple bookshelf project built in React.

## Tree Structure
```
+--public/    
 |-- index.html 
 |-- favicon.ico 
+-- src/
 +-- icons/
  |-- add.svg
  |-- arrow-back.svg
  |-- arrow-drop-down.svg
 |-- App.js 
 |-- App.css
 |-- App.test.js
 |-- BooksAPI.js 
 |-- index.js
 |-- index.css
|-- .gitignore 
|-- README.MD
|-- SEARCH_TERMS.md - The whitelisted collection of search terms.
```

## Backend Server

BooksAPI.js methods available:

### `getAll()`
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in the app.

### `update(book, shelf)`
* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search(query, maxResults)`
* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend.

