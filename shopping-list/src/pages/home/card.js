import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {
  Card as MaterialCard,
  CardActionArea,
  CardContent
} from '@material-ui/core'

import Footer from './footer'

const Card = ({ containerClass, children, link, hasFooter }) => (
  <div className={containerClass}>
    <Link to={link}>
      <MaterialCard className='card'>
        <CardActionArea className='card-action-area'>
          <CardContent className='card-content'>
            {children}
          </CardContent>
        </CardActionArea>
        {hasFooter && <Footer />}
      </MaterialCard>
    </Link>
  </div>
)

Card.propTypes = {
  containerClass: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
  hasFooter: PropTypes.bool
}

export default Card
