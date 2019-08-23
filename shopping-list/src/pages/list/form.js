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

  populateForm = (prevProps) => {
    if (this.props.form.action === 'update' && prevProps.form.productToUpdate !== this.props.form.productToUpdate) {
      const { product, quantity, unit, price } = this.props.form.productToUpdate

      this.setState({
        list: this.props.form.listToUpdate,
        product,
        quantity,
        unit,
        price,
        showErrors: false
      })
    }
  }

  addItem = (list, price, product, quantity, unit) => {
    this.props.addProduct({ product, quantity, unit, price }, list)
    this.clearState(list)
  }

  updateItem = (list, price, product, quantity, unit) => {
    const { id, checked } = this.props.form.productToUpdate
    this.props.updateProduct({ checked, id, price, product, quantity, unit }, list)
    this.clearState(list)
    this.props.finishUpdate()
  }

  clearState = (list) => {
    this.setState({ ...this.INITIAL_STATE, list })
  }

  componentDidUpdate (prevProps) {
    this.populateForm(prevProps)
  }

  state = this.INITIAL_STATE

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = () => {
    const { list, price, product, quantity, unit } = this.state

    if (![list, product, quantity, unit].every(Boolean)) {
      this.setState({ showErrors: true })
    } else {
      this.props.form.action === 'new'
        ? this.addItem(list, price, product, quantity, unit)
        : this.updateItem(list, price, product, quantity, unit)
    }
  }

  render () {
    const { list, product, quantity, unit, price, showErrors } = this.state

    if (!this.props.showForm) {
      return <div />
    }

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
            children='Save'
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
  finishUpdate: PropTypes.func.isRequired,
  updateProduct: PropTypes.func.isRequired,
  showForm: PropTypes.bool.isRequired,
  form: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => ({
  form: state.form,
  showForm: state.form.action === 'update' || ownProps.url === 'new'
})

const mapDispatchToProps = dispatch => bindActionCreators({ ...FormActions, ...ListActions }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Form)
