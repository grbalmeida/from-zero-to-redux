import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  Button,
  InputAdornment,
  MenuItem,
  TextField
} from '@material-ui/core'

import { Creators as ListActions } from 'store/actions/list'

const units = ['kg', 'lt', 'un']

class Form extends Component {
  state = {
    list: '',
    product: '',
    quantity: '',
    unit: '',
    price: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = () => {
    const { list, product, quantity, unit, price } = this.state

    this.props.addProduct({ product, quantity, unit, price }, list)
  }

  render () {
    const { list, product, quantity, unit, price } = this.state
    console.log(this)

    return (
      <form className='form-container'>
        <div className='form-row'>
          <TextField
            label='List'
            name='list'
            value={list}
            onChange={this.handleChange}
            required
          />
          <Button
            color='secondary'
            children='Add'
            variant='outlined'
            onClick={this.handleSubmit}
          />
        </div>
        <div className='form-row'>
          <TextField
            label='Product'
            name='product'
            value={product}
            onChange={this.handleChange}
            required
          />
          <TextField
            label='Quantity'
            name='quantity'
            value={quantity}
            onChange={this.handleChange}
            required
          />
          <TextField
            select
            label='Unit'
            name='unit'
            value={unit}
            onChange={this.handleChange}
            required
          >
            {units.map(unit => (
              <MenuItem key={unit} value={unit}>{unit}</MenuItem>
            ))}
          </TextField>
          <TextField
            label='Price'
            name='price'
            value={price}
            onChange={this.handleChange}
            InputProps={{
              startAdornment: <InputAdornment position='start'>R$</InputAdornment>
            }}
          />
        </div>
      </form>
    )
  }
}

Form.propTypes = {
  addProduct: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  list: state.list
})

const mapDispatchToProps = dispatch => bindActionCreators(ListActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Form)
