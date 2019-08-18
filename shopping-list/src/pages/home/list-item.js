import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ListItem = ({ icon, text }) => (
  <div className='list-card-item'>
    <FontAwesomeIcon icon={icon} size='sm' />
    <p>{text}</p>
  </div>
)

ListItem.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default ListItem
