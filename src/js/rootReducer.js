import { combineReducers } from 'redux'
import movieSearchReducer from '../components/MovieSearch/movieSearchReducer.js'


  const rootReducer = combineReducers({
     movie: movieSearchReducer
  })

  export default rootReducer