import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox, Typography } from '@material-ui/core'

import { Card } from 'components'
import { ListItemFooter } from 'pages/list'

const ListItem = ({ id, price, product, quantity, total, unit }) => (
  <Card
    containerClass='list-item'
    image='https://images.freeimages.com/images/large-previews/313/coffee-1559191.jpg'
    link='#'
    footer={<ListItemFooter id={id} total={total} />}
  >
    <div>
      <div className='list-item-header'>
        <Typography variant='subtitle1' component='h2'>
          {product}
        </Typography>
        <Checkbox />
      </div>
      <Typography component='p'>{quantity} {unit}</Typography>
      <Typography component='p'>R$ {price}</Typography>
    </div>
  </Card>
)

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  product: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired
}

export default ListItem
