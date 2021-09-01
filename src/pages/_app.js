import '../styles/globals.css'
import 'antd/dist/antd.min.css'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { store } from '../store'
export default function MyApp ({ Component, pageProps }) {
  return <Provider store = { store }>
    <Head>
      <link rel = "stylesheet" href = "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    </Head>
    <Component { ...pageProps } />
  </Provider>
}
