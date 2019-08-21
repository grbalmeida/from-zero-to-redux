import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { faShoppingBasket, faCheck } from '@fortawesome/free-solid-svg-icons'

import { ListItem } from 'pages/home'
import { Card, Footer } from 'components'
import { LIST_EDIT } from 'routes'
import { getClosedItems, getOpenedItems } from 'store/reducers/list'

const List = ({ closedItems, list, openedItems, total }) => (
  <Card
    containerClass='list-container'
    link={LIST_EDIT}
    footer={<Footer total={total} />}
  >
    <div>
      <p className='title'>{list}</p>
      <div className='list-card-body'>
        <ListItem icon={faShoppingBasket} text={`${openedItems} item left`} />
        <ListItem icon={faCheck} text={`${closedItems} items purchased`} />
      </div>
    </div>
  </Card>
)

List.propTypes = {
  closedItems: PropTypes.number.isRequired,
  list: PropTypes.string.isRequired,
  openedItems: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
  openedItems: getOpenedItems(state),
  closedItems: getClosedItems(state)
})

export default connect(mapStateToProps, null)(List)
