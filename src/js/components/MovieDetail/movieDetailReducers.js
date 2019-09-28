const initialState = {
    movieDetails : {}
}; 

function movieDetailReducer(state = initialState, action){
    const  { type, payload} = action;
    switch(type){
        case 'GET_MOVIE_BY_ID_FULFILLED': {
            return {
                ...state,
               movieDetails: payload.data
            }
        }
        default: return state;
     }
}

export default movieDetailReducer