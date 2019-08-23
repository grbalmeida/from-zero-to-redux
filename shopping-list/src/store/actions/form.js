export const Types = {
  START_UPDATE: 'START_UPDATE::form',
  FINISH_UPDATE: 'FINISH_UPDATE::form',
  START_ADD: 'START_ADD::form',
  FINISH_ADD: 'FINISH_ADD::form'
}

export const Creators = {
  startUpdate: (list, product) => ({
    type: Types.START_UPDATE,
    product,
    list
  }),

  finishUpdate: () => ({
    type: Types.FINISH_UPDATE
  }),

  startAdd: list => ({
    type: Types.START_ADD,
    list
  }),

  finishAdd: () => ({
    type: Types.FINISH_ADD
  })
}
