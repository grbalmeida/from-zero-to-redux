import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

import { Creators as ListActions } from 'store/actions/list'

const ListItemFooter = ({ deleteProduct, id, total }) => (
  <div className='list-card-footer'>
    <div className='list-card-footer-actions'>
      <FontAwesomeIcon
        color='#00B0FF'
        icon={faPen}
        size='1x'
      />
      <FontAwesomeIcon
        color='#E91E63'
        icon={faTrash}
        onClick={() => deleteProduct(id)}
        size='1x'
      />
    </div>
    <p>Total: R$ {total}</p>
  </div>
)

ListItemFooter.propTypes = {
  deleteProduct: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired
}

const mapDispatchToProps = dispatch => bindActionCreators(ListActions, dispatch)

export default connect(null, mapDispatchToProps)(ListItemFooter)
