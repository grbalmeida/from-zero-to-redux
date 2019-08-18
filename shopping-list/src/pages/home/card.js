import React from 'react'
import PropTypes from 'prop-types'
import {
  Card as MaterialCard,
  CardActionArea,
  CardContent
} from '@material-ui/core'

import Footer from './footer'

const Card = ({ containerClass, children, hasFooter }) => (
  <div className={containerClass}>
    <MaterialCard className='card'>
      <CardActionArea className='card-action-area'>
        <CardContent className='card-content'>
          {children}
        </CardContent>
      </CardActionArea>
      {hasFooter && <Footer />}
    </MaterialCard>
  </div>
)

Card.propTypes = {
  containerClass: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  hasFooter: PropTypes.bool
}

export default Card
