<template>
<div>
  <!-- <h1>Current ID : {{ localStroageID }}</h1> -->
    <!-- <input v-model="username" placeholder="Enter your username" />
    <br/>
    <input v-model="password" placeholder="Enter your password" />
    <br/>
    <button>Login</button> -->
    
    <h1>---------------------------------</h1>
    <h1>Le composant usersDetails :</h1>
    <input type="number" v-model="idInput" placeholder="Enter ID" />
    <br/>
    <usersDetails :userId="parseInt(idInput)" />
    <h1>---------------------------------</h1>
    <h1>La liste des users</h1>
    <usersList />
    
</div>
</template>


<script setup lang="ts">

    import { ref } from "vue"
    import { useUserStore } from "./stores/gestionUsers"
    import type { User } from "./types/user"
    import usersDetails from "./components/usersDetails.vue"
    import UsersList from "./components/UsersList.vue"
    import { useUsers } from "./composables/useusers"

   

    const userStore = useUserStore()
    const {users, getUserById} = useUsers()

    const username = ref('')
    const password = ref('')
    const idInput = ref('')
  


    const localStroageID = localStorage.getItem('id')
    const usersList = JSON.parse(localStorage.getItem('user') || '[]')
  
    const usersExamples: User[] = [
      { id: 1, username: "John Doe", password: "1234", isActive: false },
      { id: 2, username: "Jane Doe", password: "5678", isActive: true },
      { id: 3, username: "Alice", password: "abcd", isActive: false },
      { id: 4, username: "Bob", password: "efgh", isActive: true },
    ]

    let id = usersList.length + 1
  
    const user: User = {
        id: id,
        username: "Jane Doe",
        password: "1234",
        isActive: false
    }
    // usersList.push(user)
    localStorage.setItem('user', JSON.stringify(usersList))
    console.log("usersList : ", usersList)

  

    

    localStorage.setItem('username', username.value);
    localStorage.setItem('password', password.value);
    localStorage.setItem('id', id.toString());

</script>

<style scoped>

</style>
