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
        return (
            <div>
                <input type = 'text' onChange = {this.handleChange}/>
                <button onClick = {this.handleSearch}>Search</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        userInput: state.movie.userInput
    };
}

export default connect(mapStateToProps)(MovieSearchContainer)