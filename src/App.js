import React from 'react';
import './App.css';
import MoviesList from './MoviesList';
import {MovieProvider} from './MovieContext'; 
import Nav from './Nav';
import AddMovieForm from './AddMovieForm';

function App() {


  return (
    <MovieProvider>
      <div className="App">
        <Nav/>
        <AddMovieForm/>
        <MoviesList/>
      </div>
    </MovieProvider>
  );
}

export default App;
