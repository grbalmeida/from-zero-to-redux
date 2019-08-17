import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Dimmer, Loader } from 'semantic-ui-react'

import Video from './video'

const VideoList = ({ videos, isLoading, error }) => {
  return (
    <div className='video-list'>
      {isLoading &&
      <Dimmer active>
        <Loader size='medium'>
          Loading...
        </Loader>
      </Dimmer>
      }
      {videos.map(video => <Video key={video.etag} video={video} />)}
    </div>
  )
}

VideoList.propTypes = {
  videos: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired
}

const mapStateToProps = state => {
  const { videos, isLoading, error } = state.searchReducer
  return {
    videos,
    isLoading,
    error
  }
}

export default connect(mapStateToProps, null)(VideoList)
