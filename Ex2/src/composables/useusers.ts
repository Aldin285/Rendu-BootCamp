import {ref, reactive,watch} from "vue";
import type { User } from "@/types/user";

export function useUsers() {
    const users = ref<User[]>([])

    const usersList = JSON.parse(localStorage.getItem('user') || '[]')
    users.value = usersList;

    const usersExamples: User[] = [
      { id: 1, username: "John Doe", password: "1234", isActive: false },
      { id: 2, username: "Jane Doe", password: "5678", isActive: true },
      { id: 3, username: "Alice", password: "abcd", isActive: false },
      { id: 4, username: "Bob", password: "efgh", isActive: true },
    ]
    for (const user of usersExamples) {
      if (!users.value.find(u => u.id === user.id)) {
        users.value.push(user);
      }
    }

    watch(users, (newUsers) => {
        localStorage.setItem('user', JSON.stringify(newUsers));
    })
    
    function getUserById(id: number): User | undefined {
      const checkUser = users.value.find(user => user.id === id);

      if (checkUser) {
        return checkUser;
      } else {
        console.error(`User with ID ${id} not found.`);
        return undefined;
      }
        
    }

    return { users, getUserById }
}
