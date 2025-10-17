<template>
  <div>
     <h1>--------------------------------------------</h1>
     
    <h1>Deleting user by id :</h1>
    <br/>
    <input v-model="userId" type="text" placeholder="User ID"  required>
     <br/>
    <button @click="DeleteUser">Delete</button>
    <br/>

    <h1 v-if="errorMessage">{{ errorMessage }}</h1>
    <h1>--------------------------------------------</h1>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import * as fetchRequests from '../api/users'
import type { IUser } from '../models/user'

const errorMessage = ref<string | null>(null)

const users = ref<IUser[]>([])

// One user
const oneUser = ref<IUser>()
const userId = ref()


async function DeleteUser() {
  try {
    // delete user by ID
    oneUser.value = await fetchRequests.deleteUser(String(userId))
    console.log("user deleted")
    
  } catch (err: any) {
    errorMessage.value = err.message || 'Failed to delete user'
  }
}

</script>
