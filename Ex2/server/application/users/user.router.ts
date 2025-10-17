import { Router } from 'express'
import { getAllUsers, getUserById, createUser, deleteUser } from './user.service.ts'

const router = Router()

router.get('/', async (req, res) => {
  const users = await getAllUsers()
  res.json(users)
})

router.get('/:id', async (req, res) => {
  const user = await getUserById(req.params.id)
  user ? res.json(user) : res.status(404).send('User not found')
})

router.post('/', async (req, res) => {
  const newUser = await createUser(req.body)
  res.status(201).json(newUser)
})

router.delete('/:id', async (req, res) => {
  await deleteUser(req.params.id)
  res.status(204).send()
})

export default router
