export const Types = {
  ADD_PRODUCT: 'ADD_PRODUCT::list',
  DELETE_PRODUCT: 'DELETE_PRODUCT::list',
  TOGGLE_PRODUCT: 'TOGGLE_PRODUCT::list',
  UPDATE_PRODUCT: 'UPDATE_PRODUCT::list',
  NEW_LIST: 'NEW_LIST::list'
}

export const Creators = {
  addProduct: (product, list) => ({
    type: Types.ADD_PRODUCT,
    product,
    list
  }),

  deleteProduct: productId => ({
    type: Types.DELETE_PRODUCT,
    productId
  }),

  toggleProduct: productId => ({
    type: Types.TOGGLE_PRODUCT,
    productId
  }),

  updateProduct: (product, list) => ({
    type: Types.UPDATE_PRODUCT,
    product,
    list
  }),

  newList: () => ({
    type: Types.NEW_LIST
  })
}
