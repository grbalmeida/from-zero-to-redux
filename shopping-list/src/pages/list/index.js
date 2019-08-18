import React from 'react'
import { Checkbox, Typography } from '@material-ui/core'

import './List.css'
import Form from './form'
import { Card } from 'components'

const List = () => (
  <div className='page-container'>
    <Form />
    <div className='list-items-container'>
      <Card
        containerClass='list-item'
        link='#'
      >
        <div>
          <div className='list-item-header'>
            <Typography variant='subtitle1' component='h2'>
              Coffee
            </Typography>
            <Checkbox />
          </div>
          <Typography component='p'>1 unit</Typography>
          <Typography component='p'>R$ 10.00</Typography>
        </div>
      </Card>
    </div>
  </div>
)

export default List
