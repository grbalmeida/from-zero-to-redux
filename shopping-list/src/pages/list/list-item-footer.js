import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

import { FormActions, ListActions } from 'store/actions'

const ListItemFooter = ({ deleteProduct, list, item, startUpdate }) => (
  <div className='list-card-footer'>
    <div className='list-card-footer-actions'>
      <FontAwesomeIcon
        color='#00B0FF'
        icon={faPen}
        onClick={() => startUpdate(list, item)}
        size='1x'
      />
      <FontAwesomeIcon
        color='#E91E63'
        icon={faTrash}
        onClick={() => deleteProduct(item.id)}
        size='1x'
      />
    </div>
    <p>Total: R$ {item.total}</p>
  </div>
)

ListItemFooter.propTypes = {
  deleteProduct: PropTypes.func.isRequired,
  list: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired,
  startUpdate: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  list: state.list.list
})

const mapDispatchToProps = dispatch => bindActionCreators({ ...FormActions, ...ListActions }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ListItemFooter)
