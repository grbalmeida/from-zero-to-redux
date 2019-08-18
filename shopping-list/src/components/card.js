import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {
  Card as MaterialCard,
  CardActionArea,
  CardContent
} from '@material-ui/core'

import './card.css'

const Card = ({ containerClass, children, link, footer }) => (
  <div className={containerClass}>
    <Link to={link}>
      <MaterialCard className='card'>
        <CardActionArea className='card-action-area'>
          <CardContent className='card-content'>
            {children}
          </CardContent>
        </CardActionArea>
        {footer}
      </MaterialCard>
    </Link>
  </div>
)

Card.propTypes = {
  containerClass: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
  footer: PropTypes.node
}

export default Card
