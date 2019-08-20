import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

const ListItemFooter = ({ total }) => (
  <div className='list-card-footer'>
    <div className='list-card-footer-actions'>
      <FontAwesomeIcon icon={faPen} color='#00B0FF' size='1x' />
      <FontAwesomeIcon icon={faTrash} color='#E91E63' size='1x' />
    </div>
    <p>Total: R$ {total}</p>
  </div>
)

ListItemFooter.propTypes = {
  total: PropTypes.number.isRequired
}

export default ListItemFooter
