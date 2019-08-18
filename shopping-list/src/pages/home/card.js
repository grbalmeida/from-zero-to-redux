import React from 'react'
import PropTypes from 'prop-types'
import {
  Card as MaterialCard,
  CardActionArea,
  CardContent,
  CardActions,
  Divider
} from '@material-ui/core'

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

const Footer = () => (
  <>
    <Divider />
    <CardActions className='card-footer'>
      <p>18/08/2019</p>
      <p>100.00</p>
    </CardActions>
  </>
)

Card.propTypes = {
  containerClass: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  hasFooter: PropTypes.bool
}

export default Card
