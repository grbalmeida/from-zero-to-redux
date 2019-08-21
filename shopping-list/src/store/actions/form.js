export const Types = {
  START_UPDATE: 'START_UPDATE::form',
  FINISH_UPDATE: 'FINISH_UPDATE::form'
}

export const Creators = {
  startUpdate: product => ({
    type: Types.START_UPDATE,
    product
  }),

  finishUpdate: () => ({
    type: Types.FINISH_UPDATE
  })
}
