import React, { useEffect } from 'react'
import Lottie from '../components/Lottie'
import styles from './index.module.scss'
const Index  = () => {
  return (
    <div className = { styles['lottie-container'] }>
      <Lottie params = { { path: '/lottieFiles/cat.json' } }/>
    </div>
  )
}

export default Index
