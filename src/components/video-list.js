import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Video from './video'

const VideoList = ({ videos, isLoading, error }) => {
  return (
    <div className='video-list'>
      {videos.map(video => <Video video={video} />)}
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
