import React from 'react'
import '../styles/scss/main.scss'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../redux/store'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
  // return (
  //   <Provider store={store}>
  //     <Component {...pageProps} />
  //   </Provider>
  // )
}
export default MyApp
