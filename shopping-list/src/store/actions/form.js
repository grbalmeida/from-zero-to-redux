export const Types = {
  START_UPDATE: 'START_UPDATE'
}

export const Creators = {
  startUpdate: product => ({
    type: Types.START_UPDATE,
    product
  })
}
