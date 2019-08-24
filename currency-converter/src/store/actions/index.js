import axios from 'axios'

import { CONVERT_CURRENCIES } from './constants'
import API_KEY from 'api-key-currency'

const BASE_URL = 'http://www.apilayer.net/api/'

export function convertCurrencies ({ from, to, amount }) {
  const url = `${BASE_URL}convert?access_key=${API_KEY}`

  const parameters = {
    from,
    to,
    amount,
    format: 1
  }

  const request = axios.get(url, parameters)

  return {
    type: CONVERT_CURRENCIES,
    payload: request
  }
}
