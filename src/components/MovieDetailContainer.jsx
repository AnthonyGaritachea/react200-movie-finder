import React from 'react';

import { connect } from 'react-redux'

class MovieDetailContainer extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { title, year, plot, poster } = this.props;
        return (
            <div>
                <img src = {poster}></img>
                <h1>{title}</h1>
                <h1>{year}</h1>
                <p>{plot}</p>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        poster: state.movie.poster,
        title: state.movie.title,
        year: state.movie.year,
        plot: state.movie.plot
    }
}

export default connect(mapStateToProps)(MovieDetailContainer)



