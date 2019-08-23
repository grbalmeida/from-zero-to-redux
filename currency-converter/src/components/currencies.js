import React from 'react'

const Currencies = props => (
  <select name='currencies' className='form-control' {...props}>
    <option value='BRL' title='Brazilian Real'>BRL</option>
    <option value='BTC' title='Bitcoin'>BTC</option>
    <option value='CAD' title='Canadian Dollar'>CAD</option>
    <option value='CNY' title='Chinese Yuan'>CNY</option>
    <option value='EUR' title='Euro'>EUR</option>
    <option value='GBP' title='British Pound Sterling'>GBP</option>
    <option value='ILS' title='Israeli New Sheqel'>ILS</option>
    <option value='MXN' title='Mexican Peso'>MXN</option>
    <option value='PLN' title='Polish Zloty'>PLN</option>
    <option value='USD' title='United States Dollar'>USD</option>
    <option value='XAG' title='Silver (troy ounce)'>XAG</option>
    <option value='XAU' title='Gold (troy ounce)'>XAU</option>
  </select>
)

// https://currencylayer.com/

export default Currencies
