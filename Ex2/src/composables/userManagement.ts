import {ref} from "vue";
import type { IUser } from "@/models/user";
import { createUser, fetchUsers } from "@/api/users";

export function userManagement(){

    // Ajouter un user
    const error = ref(null)
     
    let newUser = ref<IUser | null>(null)

    async function addNewUser(user: IUser) {
        error.value = null
        try {
            const createdUser = await createUser(user)
            newUser.value = createdUser
    }catch(err:any){
        error.value = err.message
    }
    }
    return{addNewUser,newUser,error}



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