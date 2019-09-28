import { type } from 'os';

const initialState = {
    userInput: '',
    searchResults: []
}; 

function movieSearchReducer(state = initialState, action){
    const  { type, payload} = action;
    switch(type){
        case 'GET_MOVIE_FULFILLED': {
            return {
                ...state,
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