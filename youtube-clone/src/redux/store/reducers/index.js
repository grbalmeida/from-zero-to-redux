import { combineReducers } from 'redux'

import searchReducer from './search-reducer'
import playVideoReducer from './play-video-reducer'

const rootReducer = combineReducers({
  searchReducer,
  playVideoReducer
})

export default rootReducer
