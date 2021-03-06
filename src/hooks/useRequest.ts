import { useCallback, useEffect, useState } from 'react'
import axios from '../api/axios'
import { AxiosRequestConfig } from 'axios'
import { Response as CommonRes } from '../api/types/common'
/**
 * 选项
 */
export interface Options {
  /** 立即请求 */
  immediate?: boolean
  /** axios配置 */
  config: AxiosRequestConfig
}

/**
 * 响应
 */
export interface Response<D> {
  /** 请求是否在loading */
  loading: boolean
  /** 返回体 */
  data: D
  /** 是否成功 */
  success: boolean
}

export default <ResponseType = any>(options: Options): [Response<ResponseType>, (_config?: AxiosRequestConfig) => Promise<void>] => {
  // 响应对象
  const [response, setResponse] = useState<Response<ResponseType>>({
    loading: false,
    data: null,
    success: false
  })

  // 立即执行
  useEffect(() => {
    if(options.immediate) {
      trigger()
    }
  }, [])

  // 触发函数
  const trigger = useCallback(async (_config?: AxiosRequestConfig) => {
    if(response.loading) {
      return 
    }
    setResponse({
      loading: true,
      data: null,
      success:  false
    })
    try {
      const res: CommonRes<ResponseType> = await axios({
        ...options.config,
        ..._config
      })
      setResponse({
        loading: false,
        data: res.data,
        success: true
      })
    }catch(err) {
      setResponse({
        loading: false,
        data: null,
        success: false
      })
    }
  }, [])

  return [
    response,
    trigger
  ]
}
