import { Types } from '../actions/form'

const INITIAL_STATE = {
  action: 'new',
  productToUpdate: {}
}

export default function form (state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.START_UPDATE:
      return {
        action: 'update',
        productToUpdate: action.product
      }
    default:
      return state
  }
}
