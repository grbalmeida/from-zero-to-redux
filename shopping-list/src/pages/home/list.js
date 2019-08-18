import React from 'react'
import { faShoppingBasket, faCheck } from '@fortawesome/free-solid-svg-icons'

import { ListItem } from 'pages/home'
import { Card } from 'components'
import { LIST } from 'routes'

const List = () => (
  <Card containerClass='list-container' link={LIST} hasFooter>
    <div>
      <p className='title'>Month</p>
      <div className='list-card-body'>
        <ListItem icon={faShoppingBasket} text='1 item left' />
        <ListItem icon={faCheck} text='2 items purchased' />
      </div>
    </div>
  </Card>
)

export default List
