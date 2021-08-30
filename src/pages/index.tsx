import React from 'react'
import Lottie from '../components/Lottie'
import styles from './index.module.scss'
const Index  = () => {
  return (
    <div className = { styles['lottie-container'] }>
      <Lottie params = { { path: 'https://assets2.lottiefiles.com/packages/lf20_xzu7hgpf.json' } }/>
    </div>
  )
}

export default Index
