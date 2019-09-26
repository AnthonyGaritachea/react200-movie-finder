const initialState = {
    userInput: '',
    title:'',
    year: '',
    plot: ''
}; 

function movieSearchReducer(state = initialState, action){
    const  { type, payload} = action;
    switch(type){
        case 'GET_MOVIE': {
            return {
                ...state,
                title: payload.data.Title,
                year: payload.data.Year,
                plot: payload.data.Plot

            }
        }
        default: return state
    }
}

export default movieSearchReducer