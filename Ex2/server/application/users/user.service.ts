import { UserModel } from '../../data/user.model.ts'

export async function getAllUsers() {
  return await UserModel.find()
}

export async function getUserById(id: string) {
  return await UserModel.findById(id)
}

export async function createUser(data: any) {
  const user = new UserModel(data)
  return await user.save()
}

export async function deleteUser(id: string) {
  return await UserModel.findByIdAndDelete(id)
}
