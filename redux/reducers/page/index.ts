import { SET_PAGE } from '../../constants'
import { IPage } from '../../../interfaces/pages'
import { PageType } from '../../../types/common'

import { IAction } from '../../../interfaces/redux'

const initialStore: PageType = {} as PageType

const reducer = (state: PageType = initialStore, action: IAction<string, IPage>): PageType => {
  switch (action.type) {
    case SET_PAGE:
      if (action.payload) {
        return {
          ...state,
          page: action.payload,
        }
      }
    default:
      return state
  }
}

export default reducer
