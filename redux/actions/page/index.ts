import { SET_PAGE } from '../../constants'
import { IPage } from '../../../interfaces/pages'

import { IAction } from '../../../interfaces/redux'

export const set_page = (page: IPage) => {
  return (dispatch): IAction<string, IPage> =>
    dispatch({
      type: SET_PAGE,
      payload: page,
    })
}
