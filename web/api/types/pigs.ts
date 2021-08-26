import { Response } from './common'

export interface PigData {
  _id: string
  name: string
  age: number
}
export type Pig = Response<PigData[]>
