<template>
<div>
         <h1>--------------------------------------------</h1>
    <h1>Créer un user</h1>

    <p>Username :</p>
    <input v-model="newUserName" placeholder="Username" required>
    <br/>

    <p>Password :</p>
    <input v-model="newUserPassword" placeholder="Password" required>
    <br/>
    <button @click="AddUser">Register</button>
         <h1>--------------------------------------------</h1>
    <h1 v-if="errorMessage">{{ errorMessage }}</h1>
</div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import * as fetchRequests from '../api/users'
import type { UserModel } from '../models/user'
import bcrypt from 'bcryptjs'

const newUserName = ref()
const newUserPassword = ref()

const errorMessage = ref()

const saltRounds =  10

  async function hashPassword(psw:string) {
  try {
    const hash = await bcrypt.hash(psw, saltRounds)
    console.log("Password hashed successfully:", hash)
    return hash
  } catch (err) {
    console.error("Error hashing password:", err)
    return psw
  }
}

async function AddUser() {
  try {

    // Hashing the password
   const hashedPassword = await hashPassword(newUserPassword.value)

    // New User
    const newUser = <UserModel>({
    username: newUserName.value,
    password: hashedPassword,
    isActive:false,
    })

    const data = await fetchRequests.createUser(newUser)
    console.log('User created: ',data)
  } catch (err: any) {
    errorMessage.value = err.message || 'Failed to load users'
  } finally {
  }
}

</script>
