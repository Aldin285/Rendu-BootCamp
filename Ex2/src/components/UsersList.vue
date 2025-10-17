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

async function load() {
  loading.value = true
  try {
    // Fetch users
    const data = await fetchRequests.fetchUsers()
    users.value = Array.isArray(data) ? data : []

  } catch (err: any) {
    error.value = err.message || 'Failed to load users'
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  load()
})
</script>
