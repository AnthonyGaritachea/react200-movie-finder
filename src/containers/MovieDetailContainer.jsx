import React from 'react';

class MovieDetailContainer extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                MovieDetailContainer
                {/* <p>Viewing movie {this.props.match.params.id}</p> */}
            </div>
        )
    }
}

export default MovieDetailContainer