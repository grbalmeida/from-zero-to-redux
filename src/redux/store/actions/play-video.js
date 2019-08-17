import { PLAY_VIDEO } from './constants'

export const playVideo = video => {
  return {
    type: PLAY_VIDEO,
    video
  }
}
