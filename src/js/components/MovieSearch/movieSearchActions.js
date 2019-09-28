import axios from 'axios';

export const updateUserInput = userInput => {
    return {
        type: 'UPDATE_USER_INPUT',
        payload: userInput
    }
}

export function getMovie(userInput){
    return {
        'type': 'GET_MOVIE',
        payload: axios.get(`/movieInfo/${userInput}`)
    }
}