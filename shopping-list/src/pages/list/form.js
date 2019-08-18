import React from 'react'
import {
  Button,
  InputAdornment,
  MenuItem,
  TextField
} from '@material-ui/core'

const units = ['kg', 'lt', 'un']

const Form = () => (
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

export default Form
