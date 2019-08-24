import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Currencies } from 'components'
import { convertCurrencies } from 'store/actions'

const Form = () => (
  <form>
    <div className='row justify-content-md-center'>
      <div className='input-group input-group-lg'>
        <input type='number' className='form-control' name='amount' />
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

const mapDispatchToProps = dispatch => bindActionCreators(convertCurrencies, dispatch)

export default connect(null, mapDispatchToProps)(Form)
