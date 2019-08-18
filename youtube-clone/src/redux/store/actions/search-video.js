import youtubeSearch from 'youtube-api-v3-search'

import API_KEY from 'api'
import {
  START_VIDEO_SEARCH,
  SUCCESS_VIDEO_SEARCH,
  ERROR_VIDEO_SEARCH
} from './constants'

export const startVideoSearch = () => {
  return {
    type: START_VIDEO_SEARCH,
    isLoading: true,
    error: false
  }
}

export const successVideoSearch = videos => {
  return {
    type: SUCCESS_VIDEO_SEARCH,
    videos,
    isLoading: false,
    error: false
  }
}

export const errorVideoSearch = () => {
  return {
    type: ERROR_VIDEO_SEARCH,
    isLoading: false,
    error: true
  }
}

export const searchVideo = term => {
  return dispatch => {
    dispatch(startVideoSearch())
    youtubeSearch(API_KEY, { q: term })
      .then(data => dispatch(successVideoSearch(data.items)))
      .catch(() => dispatch(errorVideoSearch()))
  }
}
