import React from 'react'

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
        <select className='form-control' id='form-select-from'>
          <option value='BRL' label='BRL'>BRL</option>
          <option value='USD' label='USD'>USD</option>
        </select>
      </div>
      <div className='col-md-6'>
        <label htmlFor='form-select-to' id='form-select-to'>To:</label>
        <select className='form-control' id='form-select-from'>
          <option value='BRL' label='BRL'>BRL</option>
          <option value='USD' label='USD' selected>USD</option>
        </select>
      </div>
      <button className='btn btn-primary' onClick={e => e.preventDefault()}>Convert</button>
    </div>
  </form>
)

export default Form
