import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MovieSearchHome from './components/MovieSearch/MovieSearchHome.jsx';
import MovieDetailAbout from './components/MovieDetail/MovieDetailAbout.jsx';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
        <div className='container'> 
            <Route path = "/" exact component = {MovieSearchHome}/>
            <Route path = "/about/:id" exact component = {MovieDetailAbout}/>
        </div>
        </Switch>
      </Router>
    );
  }
}
