import { HIDE_LOADING, SHOW_LOADING } from '../../constants'

type actionLoaderType = () => { type: string }

export const showLoader: actionLoaderType = () => ({
  type: SHOW_LOADING,
})

export const hideLoader: actionLoaderType = () => ({
  type: HIDE_LOADING,
})
