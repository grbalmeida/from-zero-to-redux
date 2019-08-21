import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Checkbox, Typography } from '@material-ui/core'

import { Card } from 'components'
import { ListItemFooter } from 'pages/list'
import { ListActions } from 'store/actions'

const ListItem = ({ item, toggleProduct }) => {
  const { checked, id, price, product, quantity, unit } = item
  return (
    <Card
      action={() => toggleProduct(id)}
      containerClass='list-item'
      image='https://images.freeimages.com/images/large-previews/313/coffee-1559191.jpg'
      link='#'
      footer={<ListItemFooter item={item} />}
    >
      <div>
        <div className='list-item-header'>
          <Typography variant='subtitle1' component='h2'>
            {product}
          </Typography>
          <Checkbox checked={checked} />
        </div>
        <Typography component='p'>{quantity} {unit}</Typography>
        <Typography component='p'>R$ {price}</Typography>
      </div>
    </Card>
  )
}

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
  toggleProduct: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => bindActionCreators(ListActions, dispatch)

export default connect(null, mapDispatchToProps)(ListItem)
