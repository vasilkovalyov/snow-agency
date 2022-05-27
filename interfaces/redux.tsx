import { PageType } from '../types/common'

export interface IAction<T, P> {
  readonly type: T
  readonly payload?: P
}

export interface IStore {
  pageStore: PageType
}
