import mongoose, {Schema, Document} from 'mongoose'

export interface IUser extends Document {
  id: number
  username: string
  password: string
  isActive: boolean
}

const userSchema = new Schema <IUser>({
  username: { type: String, required: true },
  password: { type: String, required: true },
  isActive: { type: Boolean, default: false },
})

export default mongoose.models.User ||  mongoose.model<IUser>('User', userSchema)