import React from 'react'

import './List.css'
import { Form, ListItem } from 'pages/list'

const List = () => (
  <div className='page-container'>
    <Form />
    <div className='list-items-container'>
      <ListItem />
    </div>
  </div>
)

export default List
