import React from 'react'
import { Segment, Input } from 'semantic-ui-react'

const SearchBar = () => {
  const searchTerm = e => {
    const { value } = e.target

    if (e.keyCode === 13) {
      console.log(value)
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

export default SearchBar
