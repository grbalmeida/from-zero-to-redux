import React from 'react'
import { Checkbox, Typography } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

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
        footer={<ListItemFooter />}
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

const ListItemFooter = () => (
  <div className='list-card-footer'>
    <div className='list-card-footer-actions'>
      <FontAwesomeIcon icon={faPen} color='#00B0FF' size='1x' />
      <FontAwesomeIcon icon={faTrash} color='#E91E63' size='1x' />
    </div>
    <p>Total: R$ 50</p>
  </div>
)

export default List
