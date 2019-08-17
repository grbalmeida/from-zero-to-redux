import React from 'react'
import { connect } from 'react-redux'
import { Advertisement } from 'semantic-ui-react'

const VideoPlayer = () => (
  <div className='video-player'>
    <Advertisement
      style={{ height: '433px' }}
      unit='top banner'
      test='Choose a video to play'
    />
  </div>
)

const mapStateToProps = state => {
  return {
    video: state.playVideoReducer.video
  }
}

export default connect(mapStateToProps, null)(VideoPlayer)
