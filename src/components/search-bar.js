import React from 'react'
import { Segment, Input } from 'semantic-ui-react'

const SearchBar = () => (
  <div className='search-bar'>
    <Segment stacked>
      <Input
        icon='search'
        size='large'
        placeholder='Search...'
      />
    </Segment>
  </div>
)

export default SearchBar
