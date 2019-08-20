import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './List.css'
import { Form, ListItem } from 'pages/list'
import { Creators as ListActions } from 'store/actions/list'

const List = ({ items }) => (
  <div className='page-container'>
    <Form />
    <div className='list-items-container'>
      {items.map((item, index) => <ListItem key={index} {...item} />)}
    </div>
  </div>
)

List.propTypes = {
  items: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  items: state.list.items
})

const mapDispatchToProps = dispatch => bindActionCreators(ListActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(List)
