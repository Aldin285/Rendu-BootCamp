import type { IUser } from '../models/user'
import api from './axios'


export async function fetchUsers() {
  const response = await api.get('/users')
  return response.data
}

export async function fetchSingleUser(id:String) {
  const response = await api.get(`/users/${id}`)
  return response.data
}


export async function createUser(user: IUser) {
  const res = await api.post('/users', user)
  return res.data
}