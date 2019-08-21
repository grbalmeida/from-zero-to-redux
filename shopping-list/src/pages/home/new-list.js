import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Card } from 'components'
import { NEW_LIST } from 'routes'
import { ListActions } from 'store/actions'

const NewList = ({ newList }) => (
  <Card
    action={newList}
    containerClass='new-list-container'
    link={NEW_LIST}
  >
    <div>
      <p className='title'>Add new shopping list</p>
    </div>
  </Card>
)

NewList.propTypes = {
  newList: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => bindActionCreators(ListActions, dispatch)

export default connect(null, mapDispatchToProps)(NewList)
