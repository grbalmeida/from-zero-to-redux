import React from 'react'
import PropTypes from 'prop-types'
import { CardActions, Divider } from '@material-ui/core'

const Footer = ({ total }) => (
  <>
    <Divider />
    <CardActions className='card-footer'>
      <p>18/08/2019</p>
      <p>{total}</p>
    </CardActions>
  </>
)

Footer.propTypes = {
  total: PropTypes.number.isRequired
}

export default Footer
