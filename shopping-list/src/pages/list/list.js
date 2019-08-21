import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './List.css'
import { Form, ListItem } from 'pages/list'
import { ListActions } from 'store/actions'

class List extends Component {
  render () {
    return (
      <div className='page-container'>
        <Form url={this.props.match.params.action} />
        <div className='list-items-container'>
          {this.props.items.map(item => <ListItem key={item.id} item={item} />)}
        </div>
      </div>
    )
  }
}

List.propTypes = {
  items: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  items: state.list.items
})

const mapDispatchToProps = dispatch => bindActionCreators(ListActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(List)
