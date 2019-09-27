import { type } from 'os';

const initialState = {
    userInput: '',
    poster: '',
    title:'',
    year: '',
    plot: '',
    searchResults: []
}; 

function movieSearchReducer(state = initialState, action){
    const  { type, payload} = action;
    switch(type){
        case 'GET_MOVIE_FULFILLED': {
            return {
                ...state,
                poster: payload.data.Poster,
                title: payload.data.Title,
                year: payload.data.Year,
                plot: payload.data.Plot,
                searchResults: payload.data.Search
            }
        }

        case 'UPDATE_USER_INPUT': {
            return {
                ...state,
                userInput: payload
            }
        }
        default: return state
    }
}

export default movieSearchReducer