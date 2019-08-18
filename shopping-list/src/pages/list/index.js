import React from 'react'
import {
  InputAdornment,
  MenuItem,
  TextField
} from '@material-ui/core'

const units = ['kg', 'lt', 'un']

const List = () => (
  <div className='page-container'>
    <form className='form-container'>
      <TextField
        label='List'
        name='list'
        value=''
        onChange={() => {}}
        required
      />
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
    </form>
  </div>
)

export default List
