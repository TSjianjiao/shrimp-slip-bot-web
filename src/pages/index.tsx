import { AnimationItem } from 'lottie-web'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Lottie from '../components/Lottie'
import _throttle from 'lodash/throttle'
import styles from './index.module.scss'
import cs from 'classnames'
import { TextField, Button } from '@material-ui/core'
import { useQuery, gql, useLazyQuery } from '@apollo/client'


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
    if(!isActive && lottieInstance?.currentFrame <= 390 && touchCount >= 2) {
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

  // const books = useQuery(gql`
  //   query {
  //     books {
  //       title
  //       author
  //     }
  //   }
  // `)
  // useEffect(() => {
  //   if(!books.error) {
  //     console.log(books.data)
  //   }else {
  //     console.log(books.error)
  //   }
  // }, [books])
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
          <TextField
            id = "account"
            label = "??????"
            classes = { {root: styles['input']} }
            variant = "outlined"/>

          <TextField
            id = "pwd"
            label = "??????"
            type = 'password'
            classes = { {root: styles['input']} }
            variant = "outlined"/>
          <Button
            variant = "contained"
            color = "primary"
            classes = { {containedPrimary: styles['login-btn']} }>
            ??????
          </Button>
        </div>
      </div>
    </>
  )
}

export default Index
