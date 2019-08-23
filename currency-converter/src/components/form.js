import React from 'react'
import { Currencies } from 'components'

const Form = () => (
  <form>
    <div className='row justify-content-md-center'>
      <div className='input-group input-group-lg'>
        <input type='number' className='form-control' />
      </div>
    </div>
    <div className='row form-group'>
      <div className='col-md-6'>
        <label htmlFor='form-select-from'>From:</label>
        <Currencies
          id='form-select-from'
          name='from'
        />
      </div>
      <div className='col-md-6'>
        <label htmlFor='form-select-to' id='form-select-to'>To:</label>
        <Currencies
          id='form-select-to'
          name='to'
        />
      </div>
    </div>
    <div className='row'>
      <button type='button' className='btn btn-primary btn-lg btn-block'>Convert</button>
    </div>
  </form>
)

export default Form
