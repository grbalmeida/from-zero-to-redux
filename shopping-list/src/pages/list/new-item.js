import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import { FormActions } from 'store/actions'
import { Card } from 'components'

const NewItem = ({ list, startAdd }) => (
  <Card
    action={() => startAdd(list)}
    link='#'
    containerClass='list-item'
  >
    <div className='new-item'>
      <p className='title'>New Product</p>
      <FontAwesomeIcon
        icon={faPlusCircle}
        color='#E4E4E4'
        size='8x'
      />
    </div>
  </Card>
)

NewItem.propTypes = {
  list: PropTypes.string,
  startAdd: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  list: state.list.list
})

const mapDispatchToProps = dispatch => bindActionCreators(FormActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(NewItem)
