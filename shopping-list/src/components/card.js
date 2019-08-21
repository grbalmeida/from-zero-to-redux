import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {
  Card as MaterialCard,
  CardActionArea,
  CardContent,
  CardMedia
} from '@material-ui/core'

import './card.css'

const Card = ({ action, containerClass, children, image, link, footer }) => (
  <div className={containerClass}>
    <Link to={link}>
      <MaterialCard className='card'>
        <CardActionArea
          className='card-action-area'
          onClick={action}
        >
          {
            image &&
            <CardMedia
              component='img'
              className='card-image'
              height='100'
              image={image}
            />
          }
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
  action: PropTypes.func,
  containerClass: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  image: PropTypes.string,
  link: PropTypes.string.isRequired,
  footer: PropTypes.node
}

export default Card
