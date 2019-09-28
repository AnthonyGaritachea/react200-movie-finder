import React from 'react';

import { connect } from 'react-redux';

import { getMovieById } from './movieDetailActions.js'

class MovieDetailAbout extends React.Component {
    constructor(props){
        super(props)
    }
    
    componentDidMount(){
        const { dispatch } = this.props;
        dispatch(getMovieById(this.props.match.params.id))
    }
    
    render(){
        const { movieDetails } = this.props;
        return (
            <div>
                <img src = {movieDetails.Poster}></img>
                <h1>{movieDetails.Title}</h1>
                <p>{movieDetails.Year}</p>
                <p>{movieDetails.Rated}</p>
                <p>{movieDetails.Genre}</p>
                <p>{movieDetails.Production}</p>
                <p>{movieDetails.Plot}</p>
            </div>
        )
    }
}

function mapStateToProps(store) {
    return {
      movieDetails: store.movieDetail.movieDetails
    };
  }
  
  export default connect(mapStateToProps)(MovieDetailAbout);





