import React from 'react'

import Card from './card'
import { LIST } from 'routes'

const NewList = () => (
  <Card containerClass='new-list-container' link={LIST}>
    <div>
      <p className='title'>Add new shopping list</p>
    </div>
  </Card>
)

export default NewList
