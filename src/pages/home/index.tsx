import { FC } from 'react'
import { useSelector } from 'react-redux'

const Home:FC<any> = () => {

  return <div>
    <button onClick = { () => {

    } }>添加</button>
    <h1>The value of customKey is: {process.env.customKey}</h1>
  </div>
}
export default Home
