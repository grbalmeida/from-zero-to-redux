import React from 'react'
import { faShoppingBasket, faCheck } from '@fortawesome/free-solid-svg-icons'

import { Card, ListItem } from 'pages/home'

const List = () => (
  <Card containerClass='list-container' hasFooter>
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
