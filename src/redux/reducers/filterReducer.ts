import { filters } from '../../constants'

const initialFilter = {
  filter: '',
}

const filterReducer = (
  state = initialFilter,
  action: { type: string },
): { filter: string } => {
  switch (action.type) {
    case filters.completed:
      return {
        ...state,
        filter: filters.completed,
      }

    case filters.active:
      return {
        ...state,
        filter: filters.active,
      }

    default:
      return {
        ...state,
        filter: filters.all,
      }
  }
}

export default filterReducer
