import { defineStore } from "pinia";
import type { User } from "@/types/user";
import { ref,reactive } from "vue";

export const useUserStore = defineStore('user', {
  state: () => ({
    currentLoggedUser: currentUser as User | null,
    token: ref(null as String | null),
  }),

  getters:{
      isAuthenticated: (state) => !!state.currentLoggedUser,
      userId: (state) => state.currentLoggedUser?.id
  },

  actions:{
//         async NavigatorLogin(credentials){
//             const data = await avatarGroupInjectionKey.login(credentials);
//             this.currentLoggedUser = data.user;
//             this.token = data.token;
//         }

        //  async registerUser(username: String, password: String){
        //     try{
        //         this.currentLoggedUser = await api.post({username, password});
        //     }catch(error){
        //         console.error("Registration failed:", error);
        //         throw error;
        //     }
        //  },
        
        setUser(user:User){
            this.currentLoggedUser = user;
        },

        setToken(token:String){
            this.token = token;
        },

        logout(){
            this.currentLoggedUser = null;
            this.token = null;
        }

}
})

const currentUser: User = {
        id: 4,
        username: "Jane Doe",
        password: "1234",
        isActive: false
    }
