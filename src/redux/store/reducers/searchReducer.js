import {
  START_VIDEO_SEARCH,
  SUCCESS_VIDEO_SEARCH,
  ERROR_VIDEO_SEARCH
} from '../actions/constants'

const INITIAL_STATE = {
  videos: [],
  isLoading: false,
  error: false
}

export default function searchReducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case START_VIDEO_SEARCH:
      return {
        videos: [],
        isLoading: true,
        error: false
      }
    case SUCCESS_VIDEO_SEARCH:
      return {
        videos: action.videos,
        isLoading: false,
        error: false
      }
    case ERROR_VIDEO_SEARCH:
      return {
        videos: [],
        isLoading: false,
        error: false
      }
    default:
      return state
  }
}
