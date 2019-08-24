import React from 'react'
import { connect } from 'react-redux'

import { Form } from 'components'

const Converter = () => (
  <div className='content'>
    <div className='row justify-content-md-center'>
      <div className='card text-center w-50'>
        <div className='card-header bg-info'>
          Currency Broker
        </div>
        <div className='card-body'>
          <Form />
        </div>
        <div className='card-footer text-light bg-dark'>
          0.00
        </div>
      </div>
    </div>
  </div>
)

const mapStateToProps = state => ({
  convert: state.convertReducer
})

export default connect(mapStateToProps, null)(Converter)
