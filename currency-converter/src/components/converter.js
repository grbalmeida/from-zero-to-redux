import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Form } from 'components'

const Converter = ({ convert }) => (
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
          {convert.quotes && convert.quotes[Object.keys(convert.quotes)[0]]}
        </div>
      </div>
    </div>
  </div>
)

Converter.propTypes = {
  convert: PropTypes.any.isRequired
}

const mapStateToProps = state => ({
  convert: state.convertReducer
})

export default connect(mapStateToProps, null)(Converter)
