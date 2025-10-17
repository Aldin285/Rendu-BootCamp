import express from "express"
import User from "../../src/models/user.js"

const router = express.Router()

// Fetch all users
router.get("/", async (req, res) => {
 try {
    const users = await User.find()
    res.json(users)
  } catch (error) {
    console.error('Error fetching users:', error)
    res.status(500).json({ error: 'Failed to fetch users' })
  }
})

// Fetch a user by id 
router.get("/:id", async (req, res) => {
 try {
    const user = await User.findById(req.params.id)
    if(!user){
        return res.status(404).json({ error: 'User not found' })
    }
    res.status(200).json(user)
  } catch (error) {
    console.error('Error fetching users:', error)
    res.status(500).json({ error: 'Failed to fetch the user' })
  }
})


// Add a user
router.post("/", async (req, res) => {
  try {
    const { username, password, isActive } = req.body

    if (!username || !password) {
      return res.status(400).json({ message: "Username and password required" })
    }

    const checkUser = await User.findOne({username})
     if (checkUser) {
      return res.status(400).json({ message: "User already exists" })
    }
    const newUser = new User({ username, password, isActive })
    const savedUser = await newUser.save()

     res.status(201).json(savedUser)

  } catch (err) {
    console.error("Error creating user:", err)
    res.status(500).json({ message: "Internal server error" })
  }
})


export default router
