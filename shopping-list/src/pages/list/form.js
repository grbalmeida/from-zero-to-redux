import React from 'react'
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

const Form = ({ addProduct }) => (
  <form className='form-container'>
    <div className='form-row'>
      <TextField
        label='List'
        name='list'
        value=''
        onChange={() => {}}
        required
      />
      <Button variant='outlined' color='secondary'>Add</Button>
    </div>
    <div className='form-row'>
      <TextField
        label='Product'
        name='product'
        value=''
        onChange={() => {}}
        required
      />
      <TextField
        label='Quantity'
        name='quantity'
        value=''
        onChange={() => {}}
        required
      />
      <TextField
        select
        label='Unit'
        name='unit'
        value=''
        onChange={() => {}}
        required
      >
        {units.map(unit => (
          <MenuItem key={unit} value={unit}>{unit}</MenuItem>
        ))}
      </TextField>
      <TextField
        label='Price'
        name='price'
        value=''
        onChange={() => {}}
        InputProps={{
          startAdornment: <InputAdornment position='start'>R$</InputAdornment>
        }}
      />
    </div>
  </form>
)

Form.propTypes = {
  addProduct: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  list: state.list
})

const mapDispatchToProps = dispatch => bindActionCreators(ListActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Form)
