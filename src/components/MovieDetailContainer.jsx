import React from 'react';

import { connect } from 'react-redux'

class MovieDetailContainer extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { title, year, plot } = this.props;
        return (
            <div>
                <h1>{title}</h1>
                <h1>{year}</h1>
                <p>{plot}</p>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        title: state.movie.title,
        year: state.movie.year,
        plot: state.movie.plot
    }
}

export default connect(mapStateToProps)(MovieDetailContainer)



