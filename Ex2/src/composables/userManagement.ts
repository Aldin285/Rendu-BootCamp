import {ref} from "vue";
import type { IUser } from "@/models/user";
import { createUser, fetchUsers } from "@/api/users";

export function userManagement(){

    // Fetch les users de la bdd

    let allUsers = ref<IUser[]>([])
    const errorFetchAllUsers = ref(null)

    async function fetchAllUsers() {
        errorFetchAllUsers.value = null

        try{
            const usersDB = await fetchUsers()
            allUsers.value = usersDB.json()
        }catch(err:any){
        errorFetchAllUsers.value = err.message
    }
    }
    return{fetchAllUsers,allUsers,errorFetchAllUsers}
    
}