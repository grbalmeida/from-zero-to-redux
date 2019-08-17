import React from 'react'
import { List, Image } from 'semantic-ui-react'

const VideoList = () => (
  <div className='video-list'>
    <List
      animated
      verticalAlign='middle'
    >
      <List.Item>
        <Image
          avatar
          src=''
        />
        <List.Content>
          <List.Header>VideoTitle</List.Header>
        </List.Content>
      </List.Item>
    </List>
  </div>
)

export default VideoList
