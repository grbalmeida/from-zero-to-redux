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
  INITIAL_STATE = {
    list: '',
    product: '',
    quantity: '',
    unit: '',
    price: '',
    showErrors: false
  }

  state = this.INITIAL_STATE

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = () => {
    const { list, product, quantity, unit, price } = this.state

    if (![list, product, quantity, unit].every(Boolean)) {
      this.setState({ showErrors: true })
    } else {
      this.props.addProduct({ product, quantity, unit, price }, list)
      this.setState({ ...this.INITIAL_STATE, list })
    }
  }

  render () {
    const { list, product, quantity, unit, price, showErrors } = this.state

    return (
      <form className='form-container'>
        <div className='form-row'>
          <TextField
            label='List'
            name='list'
            value={list}
            onChange={this.handleChange}
            required
            error={!list && showErrors}
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
            error={!product && showErrors}
          />
          <TextField
            label='Quantity'
            name='quantity'
            value={quantity}
            onChange={this.handleChange}
            required
            error={!quantity && showErrors}
          />
          <TextField
            select
            label='Unit'
            name='unit'
            value={unit}
            onChange={this.handleChange}
            required
            error={!unit && showErrors}
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
  addProduct: state.list
})

const mapDispatchToProps = dispatch => bindActionCreators(ListActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Form)
