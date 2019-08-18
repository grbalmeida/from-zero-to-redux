import { PLAY_VIDEO } from '../actions/constants'

const INITIAL_STATE = {
  video: {}
}

export default function playVideo (state = INITIAL_STATE, action) {
  if (action.type === PLAY_VIDEO) {
    return {
      video: action.video
    }
  }

  return state
}
