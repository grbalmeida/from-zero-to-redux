import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Segment, Input } from 'semantic-ui-react'

import { searchVideo } from 'redux/store/actions/search-video'

const SearchBar = ({ searchVideo }) => {
  const searchTerm = e => {
    if (e.keyCode === 13) {
      searchVideo(e.target.value)
    }
  }

  return (
    <div className='search-bar'>
      <Segment stacked>
        <Input
          icon='search'
          size='large'
          placeholder='Search...'
          onKeyDown={searchTerm}
        />
      </Segment>
    </div>
  )
}

SearchBar.propTypes = {
  searchVideo: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => {
  return {
    searchVideo: term => dispatch(searchVideo(term))
  }
}

export default connect(null, mapDispatchToProps)(SearchBar)
