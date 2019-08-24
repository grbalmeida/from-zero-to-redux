import axios from 'axios'

import { CONVERT_CURRENCIES } from './constants'
import API_KEY from 'api-key-currency'

const BASE_URL = 'http://www.apilayer.net/api/'

export function convertCurrencies ({ from, to, amount }) {
  const url = `${BASE_URL}/live?access_key=${API_KEY}&source=${from}&currencies=${to}`

  const request = axios.get(url)

  return {
    type: CONVERT_CURRENCIES,
    payload: request
  }
}
