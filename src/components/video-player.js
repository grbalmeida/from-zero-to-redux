import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Advertisement, Embed } from 'semantic-ui-react'

const VideoPlayer = ({ video }) => {
  const { id, title, description } = video

  return (
    <div className='video-player'>
      {!id &&
        <Advertisement
          style={{ height: '433px' }}
          unit='top banner'
          test='Choose a video to play'
        />
      }
      {id &&
        <div>
          <Embed
            id={id.videoId}
            source='youtube'
          />
          <p>{title}</p>
          <p>{description}</p>
        </div>
      }
    </div>
  )
}

VideoPlayer.propTypes = {
  video: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  return {
    video: state.playVideoReducer.video
  }
}

export default connect(mapStateToProps, null)(VideoPlayer)
