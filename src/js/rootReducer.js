import { combineReducers } from 'redux'
import movieSearchReducer from '../components/MovieSearch/movieSearchReducers.js'


  const rootReducer = combineReducers({
     movie: movieSearchReducer
  })

  export default rootReducer