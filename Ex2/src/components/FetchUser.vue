<template>
  <div>

    <!-- Fetching One user -->
     <h1>--------------------------------------------</h1>
     
    <h1>Fetching One user By ID:</h1>
    <br/>
    <input v-model="userId" type="text" placeholder="User ID"  required>
     <br/>
    <button @click="FetchUser">Register</button>
    <br/>
    <ul v-if="oneUser">
      <li>Username: {{ oneUser?.username }}</li>
      <li>password: {{ oneUser?.password }}</li>
    </ul>

    <p class="red" v-if="errorMessage">{{ errorMessage }}</p>
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


async function FetchUser() {
  try {


    // Fetch user by ID
    oneUser.value = await fetchRequests.fetchSingleUser(String(userId))
    
  } catch (err: any) {
    errorMessage.value = err.message || 'Failed to load users'
  }
}

</script>
<style scoped>
    .red{
        color: red;
    }
</style>