import React from 'react'
import PropTypes from 'prop-types'
import { faShoppingBasket, faCheck } from '@fortawesome/free-solid-svg-icons'

import { ListItem } from 'pages/home'
import { Card, Footer } from 'components'
import { LIST } from 'routes'

const List = ({ list, total }) => (
  <Card
    containerClass='list-container'
    link={LIST}
    footer={<Footer total={total} />}
  >
    <div>
      <p className='title'>{list}</p>
      <div className='list-card-body'>
        <ListItem icon={faShoppingBasket} text='1 item left' />
        <ListItem icon={faCheck} text='2 items purchased' />
      </div>
    </div>
  </Card>
)

List.propTypes = {
  list: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired
}

export default List
