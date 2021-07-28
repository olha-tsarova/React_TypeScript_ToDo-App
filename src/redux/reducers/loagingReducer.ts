/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAIL
} from '../../constants/constants'

const initialLoading = {
  loading: false
}

const loadingReducer = (
  state = initialLoading,
  action: { type: string }
) => {
  switch (action.type) {
    case FETCH_TODOS_REQUEST:
      return { ...state, loading: true }

    case FETCH_TODOS_SUCCESS:
    case FETCH_TODOS_FAIL:
      return { ...state, loading: false }

    default:
      return state
  }
}

export default loadingReducer
