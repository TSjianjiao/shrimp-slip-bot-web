import React, { FC, useEffect, useRef, useState } from 'react'
import LottiePlayer, { AnimationConfigWithData, AnimationConfigWithPath, AnimationItem } from 'lottie-web'
import styles from './index.module.scss'
import cs from 'classnames'
interface LottieProps {
  className?: string
  params: Partial<AnimationConfigWithPath | AnimationConfigWithData>
  onPlayerReady?: (ins:AnimationItem) => any
}
const Lottie:FC<LottieProps>  = ({
  params,
  className,
  onPlayerReady = () => {}
}) => {
  const containerRef = useRef<HTMLDivElement>()
  const [lottieInstance, setLottieInstance] = useState<AnimationItem>(null)
  useEffect(() => {
    if(containerRef.current) {
      const ins = LottiePlayer.loadAnimation({
        container: containerRef.current,
        ...params
      })
      setLottieInstance(ins)
      onPlayerReady(ins)
    }
  }, [])
  
  return (
    <div ref = { containerRef } className = { cs(styles['container'], className) }>
      
    </div>
  )
}

export default Lottie 
