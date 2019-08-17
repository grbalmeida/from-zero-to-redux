import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { List, Image } from 'semantic-ui-react'

const VideoList = ({ videos, isLoading, error }) => (
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
