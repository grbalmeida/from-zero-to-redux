import { CONVERT_CURRENCIES } from '../actions/constants'

const INITIAL_STATE = []

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case CONVERT_CURRENCIES:
      const result = action.payload.data
      return result
    default:
      return state
  }
}
