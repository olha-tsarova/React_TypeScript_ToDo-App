/* eslint-disable import/prefer-default-export */
type actionFilterType = (value: string) => { type: string }

export const setFilter: actionFilterType = (value: string) => ({
  type: value
})
