import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import { ListActions } from 'store/actions'
import { Card } from 'components'

const NewItem = () => (
  <Card
    link='#'
    containerClass='list-item'
  >
    <p className='title'>New Product</p>
    <FontAwesomeIcon
      icon={faPlusCircle}
      color='#E4E4E4'
      size='8x'
    />
  </Card>
)

const mapDispatchToProps = dispatch => bindActionCreators(ListActions, dispatch)

export default connect(null, mapDispatchToProps)(NewItem)
