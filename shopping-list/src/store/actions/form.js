export const Types = {
  START_UPDATE: 'START_UPDATE::form',
  FINISH_UPDATE: 'FINISH_UPDATE::form'
}

export const Creators = {
  startUpdate: (list, product) => ({
    type: Types.START_UPDATE,
    product,
    list
  }),

  finishUpdate: () => ({
    type: Types.FINISH_UPDATE
  })
}
