import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Image, List } from 'semantic-ui-react'

import { playVideo } from 'redux/store/actions/play-video'

const Video = ({ playVideo, video }) => {
  const { title, thumbnails } = video.snippet

  return (
    <List
      animated
      verticalAlign='middle'
    >
      <List.Item onClick={() => playVideo(video)}>
        <Image
          src={thumbnails.default.url}
        />
        <List.Content>
          <List.Header>{title}</List.Header>
        </List.Content>
      </List.Item>
    </List>
  )
}

Video.propTypes = {
  playVideo: PropTypes.func.isRequired,
  video: PropTypes.object.isRequired
}

const mapDispatchToProps = dispatch => {
  return {
    playVideo: video => dispatch(playVideo(video))
  }
}

export default connect(null, mapDispatchToProps)(Video)
