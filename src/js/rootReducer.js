import { combineReducers } from 'redux'
import movieSearchReducer from './components/MovieSearch/movieSearchReducers.js'
import movieDetailReducer from './components/MovieDetail/movieDetailReducers.js'



  const rootReducer = combineReducers({
     movie: movieSearchReducer,
     movieDetail: movieDetailReducer
  })

  export default rootReducer