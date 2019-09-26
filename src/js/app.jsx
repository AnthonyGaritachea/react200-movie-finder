import React, { Component } from 'react';
import {HashRouter as Router,Route } from 'react-router-dom';

import MovieSearchContainer from '../components/MovieSearch/MovieSearchContainer';
import MovieDetailContainer from '../components/MovieDetailContainer';

export default class App extends Component {
  render() {
    return (
      <div className='container'> 
        <MovieSearchContainer/>
        <MovieDetailContainer/>
      </div>
    
    );
  }
}
