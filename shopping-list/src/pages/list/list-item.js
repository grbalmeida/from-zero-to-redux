import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Checkbox, Typography } from '@material-ui/core'

import { Card } from 'components'
import { ListItemFooter } from 'pages/list'
import { Creators as ListActions } from 'store/actions/list'

const ListItem = ({
  checked,
  id,
  price,
  product,
  quantity,
  toggleProduct,
  total,
  unit
}) => (
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
        <Checkbox
          checked={checked}
          onClick={() => toggleProduct(id)}
        />
      </div>
      <Typography component='p'>{quantity} {unit}</Typography>
      <Typography component='p'>R$ {price}</Typography>
    </div>
  </Card>
)

ListItem.propTypes = {
  checked: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  product: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  toggleProduct: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired
}

const mapDispatchToProps = dispatch => bindActionCreators(ListActions, dispatch)

export default connect(null, mapDispatchToProps)(ListItem)
