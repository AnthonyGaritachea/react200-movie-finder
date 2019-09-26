import axios from 'axios';

export const getMovie = () => {
    return {
        'type': 'GET_MOVIE',
        payload: axios.get(`/movieInfo`)
                .then(results => console.log(results))
    }
}

export const updateUserInput = userInput => {
    return {
        type: 'UPDATE_USER_INPUT',
        payload: userInput
    }
}