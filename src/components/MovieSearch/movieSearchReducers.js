import { type } from 'os';

const initialState = {
    userInput: '',
    title:'',
    year: '',
    plot: ''
}; 

function movieSearchReducer(state = initialState, action){
    const  { type, payload} = action;
    switch(type){
        case 'GET_MOVIE_FULFILLED': { // if FULFILLED isn't present the nothing will return 
            return {
                ...state,
                title: payload.data.Title,
                year: payload.data.Year,
                plot: payload.data.Plot
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