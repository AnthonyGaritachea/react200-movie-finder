import React, { Component } from 'react';
import {HashRouter as Router,Route } from 'react-router-dom';

import MovieSearchContainer from '../components/MovieSearch/MovieSearchHome.jsx';
import MovieDetailContainer from '../components/MovieDetailAbout.jsx';

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
