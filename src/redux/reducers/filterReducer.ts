/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { filters } from '../../constants/constants'

const initialFilter = {
  filter: filters.all
}

const filterReducer = (
  state = initialFilter,
  action: { type: string }
) => {
  switch (action.type) {
    case filters.completed:
      return {
        ...state,
        filter: filters.completed
      }

    case filters.active:
      return {
        ...state,
        filter: filters.active
      }

    default:
      return {
        ...state,
        filter: filters.all
      }
  }
}

export default filterReducer
