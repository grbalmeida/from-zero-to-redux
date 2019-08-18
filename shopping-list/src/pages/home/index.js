import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket, faCheck } from '@fortawesome/free-solid-svg-icons'

import './home.css'
import Card from './card'

const Home = () => (
  <div className='page-container'>
    <Card containerClass='new-list-container'>
      <div>
        <p className='title'>Add new shopping list</p>
      </div>
    </Card>
    <Card containerClass='list-container' hasFooter>
      <div>
        <p className='title'>Month</p>
        <div className='list-card-body'>
          <div className='list-card-item'>
            <FontAwesomeIcon icon={faShoppingBasket} size='sm' />
            <p>1 item left</p>
          </div>
          <div className='list-card-item'>
            <FontAwesomeIcon icon={faCheck} size='sm' />
            <p>2 items purchased</p>
          </div>
        </div>
      </div>
    </Card>
  </div>
)

export default Home
