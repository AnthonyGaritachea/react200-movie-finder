import React from 'react';
import { connect } from 'react-redux'

import { getMovie, updateUserInput } from './movieSearchActions.js';

class MovieSearchContainer extends React.Component {
    constructor(props){
        super(props) 

        this.handleSearch = this.handleSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const { dispatch } = this.props;
        dispatch(updateUserInput(event.target.value));
    }

    handleSearch(event){
        const { dispatch, userInput } = this.props;
        event.preventDefault();
        dispatch(getMovie(userInput));
    }

    render(){
        const { searchResults } = this.props;
        return (
            <div>
                <input type = 'text' onChange = {this.handleChange}/>
                <button onClick = {this.handleSearch}>Search</button>
                <ul>
                { searchResults.map( (movie) => {
            return (
                <li key={movie.imdbID}>
                    <img src = {movie.Poster}></img>
                    {movie.Title}
                    {movie.Year}
                </li>
              )}
            )}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        userInput: state.movie.userInput,
        poster: state.movie.poster,
        title: state.movie.title,
        year: state.movie.year,
        plot: state.movie.plot,
        searchResults: state.movie.searchResults
    };
}

export default connect(mapStateToProps)(MovieSearchContainer)