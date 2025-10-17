// import { Router } from "express"
// import mongoose, { Schema } from "mongoose"

// const router = Router()


// interface User {
//   id: number
//   username: string
//   password: string
//   isActive: boolean
// }

// const users: User[] = [
//   { id: 1, username: "John Doe", password: "1234", isActive: false },
//   { id: 2, username: "Jane Doe", password: "5678", isActive: true },
//   { id: 3, username: "Alice", password: "abcd", isActive: false },
//   { id: 4, username: "Bob", password: "efgh", isActive: true },
// ]

// // --- fetch one user ---
// router.get("/oneUser", async (req, res) => {
//   try {
//     const firstUser = await UserModel.findOne()
//     console.log("First user:", firstUser)
//     res.send(firstUser)
//   } catch (err) {
//     console.error(err)
//     res.status(500).send("Database query failed")
//   }
// })

// // --- Get all users ---
// router.get("/users", (req, res) => {
//   res.json(users)
// })

// // --- Get a user by ID ---
// router.get("/users/:id", (req, res) => {
//   const userId = parseInt(req.params.id)
//   const user = users.find((u) => u.id === userId)

//   if (user) {
//     res.json(user)
//   } else {
//     res.status(404).json({ message: "User not found" })
//   }
// })

// // --- User Schema for MongoDB ---
// const userSchema = new mongoose.Schema({
//   username: { type: String, required: true },
//   password: { type: String, required: true },
//   isActive: { type: Boolean, default: false },
// })

// // --- Create User model ---
// const UserModel = mongoose.model("User", userSchema)

// // --- Create user ---
// async function createSampleUser() {
//   const existing = await UserModel.findOne({ username: "Joe Doe" })
//   if (!existing) {
//     const newUser = new UserModel({
//       username: "Joe Doe",
//       password: "1234",
//       isActive: false,
//     })
//     await newUser.save()
//     console.log("Sample user saved:", newUser)
//   }
// }
// createSampleUser().catch(console.error)

// // --- Create a new user with post ---
// router.post("/users", (req, res) => {
//   const newUser: User = {
//     id: users.length + 1,
//     username: req.body.username,
//     password: req.body.password,
//     isActive: req.body.isActive ?? false,
//   }
//   users.push(newUser)
//   res.status(201).json(newUser)
// })

// // --- Delete a user by ID ---
// router.delete("/users/:id", (req, res) => {
//   const userId = parseInt(req.params.id)
//   const userIndex = users.findIndex((u) => u.id === userId)

//   if (userIndex !== -1) {
//     users.splice(userIndex, 1)
//     res.status(204).send()
//   } else {
//     res.status(404).json({ message: "User not found" })
//   }
// })

// export default router
