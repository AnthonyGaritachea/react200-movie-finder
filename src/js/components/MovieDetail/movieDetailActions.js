import axios from 'axios';

export function getMovieById(omdbID){
    return {
        'type': 'GET_MOVIE_BY_ID',
        payload: axios.get(`/movie/${omdbID}`)
    }
}