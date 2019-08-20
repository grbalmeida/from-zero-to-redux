import React from 'react'
import { Checkbox, Typography } from '@material-ui/core'

import { Card } from 'components'
import { ListItemFooter } from 'pages/list'

const ListItem = () => (
  <Card
    containerClass='list-item'
    image='https://images.freeimages.com/images/large-previews/313/coffee-1559191.jpg'
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
)

export default ListItem
