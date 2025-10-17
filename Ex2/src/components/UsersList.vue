<template>
  <div>
    <!-- Fetching all users -->
    <h2>Fetching all users</h2>

    <div v-if="loading">Loading...</div>

    <div v-else-if="error">
      Error: {{ error }}
    </div>

    <div v-else-if="users.length > 0">
      <ul>
        <li v-for="user in users" :key="String(user._id)">
          <strong>{{ user.username }}</strong> 
          (id: {{ user._id }})
        </li>
      </ul>
    </div>

    <div v-else>
      <h3>No users found in database</h3>
    </div>

    <!-- Fetching One user -->
     <h1>--------------------------------------------</h1>
    <h1>Fetching One user By ID</h1>
    <ul>
      <li>Username: {{ oneUser?.username }}</li>
      <li>Username: {{ oneUser?.password }}</li>
    </ul>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as fetchRequests from '../api/users'
import type { IUser } from '../models/user'


const loading = ref(true)
const error = ref<string | null>(null)
// All users
const users = ref<IUser[]>([])

// One user
const oneUser = ref<IUser>()



async function load() {
  loading.value = true
  try {
    // Fetch users
    const data = await fetchRequests.fetchUsers()
    users.value = Array.isArray(data) ? data : []

    // Fetch user by ID
    oneUser.value = await fetchRequests.fetchSingleUser('68ed0998f630add8fcf89f22')
    
  } catch (err: any) {
    error.value = err.message || 'Failed to load users'
  } finally {
    loading.value = false
  }
}

// ✅ Call the function (you forgot the parentheses)
onMounted(() => {
  load()
})
</script>
