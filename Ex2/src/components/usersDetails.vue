<template>
    <div>
        <h1>Vérification du user : </h1>
        <div v-if="connectedUser?.id == userId">
            <p >You have the right ID. This is the curret user data :</p>
            <ul>
                <li>Id : {{ connectedUser?.id }}</li>
                <li>Username : {{ connectedUser?.username }}</li>
                <li>Password : {{ connectedUser?.password }}</li>
            </ul>
        </div>
        <div v-else-if="getUserById(userId)">
            <p >You got the wrong ID about the current user, but this user exists. Here is his data : </p>
           <ul>
                <li>Id : {{ getUserById(userId)?.id }}</li>
                <li>Username : {{ getUserById(userId)?.username }}</li>
                <li>Password : {{ getUserById(userId)?.password }}</li>
            </ul>
        </div>
        <div v-else>
            <p >You got the wrong ID. This user doesn't exist</p>
        </div>

        <br/>
           <div v-if="connectedUser?.id == userId">
                <button >C'est moi </button>

                <button >Modifier mon Profil </button>
           </div>
           <div v-else>
                <button >Contacter </button>
           </div>

        
       


    </div>
</template>

<script setup lang="ts">

import { ref } from "vue"
import { useUserStore } from "../stores/gestionUsers"
import type { User } from "../types/user"
import { useUsers } from "../composables/useusers"


const {users, getUserById} = useUsers()

    const props = defineProps({
        userId: { 
            type :Number,
            default: 1,
        },
       
    });

    const userStore = useUserStore()
    const connectedUser = userStore.currentLoggedUser
    console.log("Store user  : ", connectedUser)
    console.log("Prop userId  : ", props.userId)


</script>

<style scoped>
    button {
        background-color: #4CAF50; /* Green */
        border: none;
        color: white;
        padding: 10px 24px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 12px;
    }
</style>