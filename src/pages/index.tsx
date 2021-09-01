import { AnimationItem } from 'lottie-web'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Lottie from '../components/Lottie'
import _throttle from 'lodash/throttle'
import styles from './index.module.scss'
import cs from 'classnames'
import Button from '@material-ui/core/Button'
import { TextField } from '@material-ui/core'

let count = 0
let timer = 0
const Index  = () => {
  const [lottieInstance, setLottieInstance] = useState<AnimationItem>(null)
  const [touchCount, setTouchCount] = useState<number>(0)
  const [isTouch, setIsTouch] = useState<boolean>(false)
  const [isActive, setIsActive] = useState<boolean>(false)
  const [showLogin, setShowLogin] = useState<boolean>(false)
  const getLottieInstance = useCallback((ins: AnimationItem) => setLottieInstance(ins), [])

  useEffect(() => {
    if(lottieInstance) {
      lottieInstance.playSegments(
        [0, 390],
        false
      )
      lottieInstance.loop = true
    }
  }, [lottieInstance])

  const onMouseMove = useCallback(_throttle((e) => {
    setIsTouch(true)
    setTouchCount(++count)
    console.log(count)
  }, 1000, {leading: true}), [])

  const onMouseLeave = useCallback(() => {
    onMouseMove.flush()
    setTouchCount(0)
    count = 0
    setIsTouch(false)
    setIsActive(false)
  }, [])

  useEffect(() => {
    if(!isActive && lottieInstance?.currentFrame <= 390 && touchCount >= 3) {
      lottieInstance.playSegments(
        [390, 480],
        true
      )
      lottieInstance.loop = false
      setIsActive(true)
    }
  }, [touchCount, lottieInstance, isActive])

  useEffect(() => {
    if(!isTouch && lottieInstance) {
      clearTimeout(timer)
      timer = window.setTimeout(() => {
        lottieInstance.playSegments(
          [0, 390],
          true
        )
        lottieInstance.loop = true
      }, 2000)
    }
  }, [isTouch, lottieInstance])

  useEffect(() => {
    if(!showLogin) {
      if(isActive) {
        setShowLogin(true)
      } 
    }
  }, [isActive, showLogin])
  return (
    <>
      <div className = { styles['main'] }>
        <div
          onMouseMove = { onMouseMove } 
          onMouseLeave = { onMouseLeave }
          className = { styles['lottie-container'] }>
          <Lottie 
            onPlayerReady = { getLottieInstance }
            params = { { 
              path: '/lottieFiles/cat.json',
              loop: true,
              autoplay: false
            } }/>
        </div>

        <div className = { cs(styles['login'], {[styles['login-active']]: showLogin}) }>
          <div>
            <TextField id = "standard-basic" label = "账号" variant = "outlined"/>
          </div>
          <div>
            <TextField id = "standard-basic" label = "密码" type = 'password' variant = "outlined"/>
          </div>
          <Button variant = "contained" color = "primary">
            登录
          </Button>
        </div>
      </div>
    </>
  )
}

export default Index
