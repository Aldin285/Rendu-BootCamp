import type { UserModel } from '../models/user'
import api from './axios'


export async function fetchUsers() {
  const response = await api.get('/users')
  return response.data
}

export async function fetchSingleUser(id:String) {
  try{
    const response = await api.get(`/users/${id}`)
      return response.data
  }catch (error: any) {

    if (error.response) {

      console.error('Backend Error:', error.response.data)
      throw new Error(error.response.data.message || 'Error while trying to fetch user id from backend')
    
    } else if (error.request) {

      console.error('Network Error:', error.request)
      throw new Error('Error while trying to fetch user id from Network')
    
    } else {
      console.error('Axios Error:', error.message)
      throw new Error('Unexpected client error')
    }
  }
  
}


export async function createUser(user: UserModel) {
  if(user==undefined || user==null ){
    return console.log("Erreur: le user doit être défini")
  }else{
    const response = await api.post('/users', user)
    return response.data
  }
  
}