import { Types } from '../actions/form'

const INITIAL_STATE = {
  action: null,
  listToUpdate: null,
  productToUpdate: {}
}

export default function form (state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.START_UPDATE:
      return {
        action: 'update',
        listToUpdate: action.list,
        productToUpdate: action.product
      }
    case Types.FINISH_UPDATE:
      return INITIAL_STATE
    case Types.START_ADD:
      return {
        ...state,
        action: 'new',
        listToUpdate: action.list
      }
    case Types.FINISH_ADD:
      return INITIAL_STATE
    default:
      return state
  }
}
