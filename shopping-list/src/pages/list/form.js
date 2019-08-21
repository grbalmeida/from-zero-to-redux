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

import { ListActions, FormActions } from 'store/actions'

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

  updateListItem = (prevProps) => {
    if (this.props.form.action === 'update' && prevProps.form.productToUpdate !== this.props.form.productToUpdate) {
      const { product, quantity, unit, price } = this.props.form.productToUpdate

      this.setState({
        product,
        quantity,
        unit,
        price,
        showErrors: false
      })
    }
  }

  componentDidUpdate (prevProps) {
    this.updateListItem(prevProps)
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
  addProduct: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  form: state.form
})

const mapDispatchToProps = dispatch => bindActionCreators({ ...FormActions, ...ListActions }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Form)
