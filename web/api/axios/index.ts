
import { message } from 'antd'
import axios from 'axios'
const isPro = process.env.NODE_ENV === 'production'
/**
 * 地址获取思路
 * 1. 生产环境
 *  写绝对地址，因为这个项目nginx代理的是443端口 所以这里不能带上端口
 * 2. 开发环境
 *  2.1. getServerSideProps里面掉接口的时候是服务器在请求，所以要写绝对地址，端口号要带上
 *  2.2 其他地方请求的时候不需要带上端口号，直接相对地址就行了（绝对也可以）。
 *      但是这里为,node_port在浏览器环境中是undefined，所以再判断了一次，浏览器环境用相对地址
 */
const instance = axios.create({
  baseURL: '/api',
  // baseURL: isPro ? `${ process.env.NEXT_PUBLIC_URL }/api`
  //   : `${ process.env.NODE_OPRT ? process.env.NEXT_PUBLIC_URL + ':' + process.env.NODE_OPRT : '' }/api`,
})

instance.interceptors.request.use(config => {
  return config
}, error => {
  // 请求参数 网络错误
  return error?.response?.data || error
})

instance.interceptors.response.use(response => {
  const { data:axiosData } = response
  try {
    if(axiosData.error) {
      message.error(axiosData.error)
    }
  }catch(err) {}

  return axiosData
}, error => {
  try {
    message.error(error.response.data.error)
  }catch(err) {}
  return error?.response?.data || error
})


export default instance
