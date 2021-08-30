import React, { FC, useLayoutEffect, useRef } from 'react'
import LottiePlayer, { AnimationConfigWithData, AnimationConfigWithPath } from 'lottie-web'
import styles from './index.module.scss'
interface LottieProps {
  params: Partial<AnimationConfigWithPath | AnimationConfigWithData>
  // params: Partial<Omit<(AnimationConfigWithPath | AnimationConfigWithData), 'container'>>
}
const Lottie:FC<LottieProps>  = ({
  params
}) => {
  const containerRef = useRef<HTMLDivElement>()
  useLayoutEffect(() => {
    if(containerRef.current) {
      LottiePlayer.loadAnimation({
        container: containerRef.current,
        ...params
      })
    }
  }, [])
  return (
    <div ref = { containerRef } className = { styles['container'] }>
      
    </div>
  )
}

export default Lottie 
