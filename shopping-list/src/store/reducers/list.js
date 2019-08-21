import { createSelector } from 'reselect'
import uuid from 'uuid'

import { Types } from '../actions/list'

const INITIAL_STATE = {
  list: null,
  items: []
}

export default function list (state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_PRODUCT:
      return {
        list: action.list,
        items: [
          ...state.items,
          { ...action.product, total: getItemTotal(action.product), id: uuid() }
        ]
      }
    case Types.DELETE_PRODUCT:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.productId)
      }
    default:
      return state
  }
}

function getItemTotal (product) {
  return product.price * product.quantity
}

export const getListTotal = createSelector(
  state => state.list.items,
  items => items.reduce((total, item) => total + item.total, 0)
)
