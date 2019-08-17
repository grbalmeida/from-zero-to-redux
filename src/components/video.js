import React from 'react'
import PropTypes from 'prop-types'
import { Image, List } from 'semantic-ui-react'

const Video = ({ video }) => {
  const { title, thumbnails } = video.snippet

  return (
    <List
      animated
      verticalAlign='middle'
    >
      <List.Item>
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
  video: PropTypes.object.isRequired
}

export default Video
