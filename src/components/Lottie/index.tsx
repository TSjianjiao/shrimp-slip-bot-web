import React, { FC, useEffect, useRef } from 'react'
import LottiePlayer, { AnimationConfigWithData, AnimationConfigWithPath } from 'lottie-web'
import styles from './index.module.scss'
import cs from 'classname'
interface LottieProps {
  className?: string
  params: Partial<AnimationConfigWithPath | AnimationConfigWithData>
}
const Lottie:FC<LottieProps>  = ({
  params,
  className
}) => {
  const containerRef = useRef<HTMLDivElement>()
  useEffect(() => {
    if(containerRef.current) {
      LottiePlayer.loadAnimation({
        container: containerRef.current,
        ...params
     
      })
    }
  }, [])
  return (
    <div ref = { containerRef } className = { cs(styles['container'], className) }>
      
    </div>
  )
}

export default Lottie 
