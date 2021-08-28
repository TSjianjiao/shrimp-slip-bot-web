// @ts-check
import { Schema, model, models } from 'mongoose'
const PigSchema = new Schema({
  name: { type: Schema.Types.String, required: true },
  age: { type: Schema.Types.Number, default: () => 0, min: 0},
  code: { type: Schema.Types.Number, default: () => Math.random(), select: false}
})
// 防止重复定义模型
const PigModel = model('pig', PigSchema)

export default PigModel
