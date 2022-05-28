import React from 'react'
import { PageType } from '../types/common'

export const PageProvider = React.createContext<PageType | null>(null)
