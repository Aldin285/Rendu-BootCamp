import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import usersRoutes from './server/routes/users.js'


// Je voualis utiliser le .env mais il detecte pas les variables

const app = express()
app.use(cors())
app.use(express.json())

const PORT = 3000

app.get('/', (req, res) => {
  res.status(200).send('Hello World!')
})

const users = [
  { id: 1, username: 'Pat' },
  { id: 2, username: 'Klen' },
]


app.get('/api', (req, res) => {
  res.json("Connected to api")
})

app.use('/api/users',usersRoutes)



mongoose.connect('mongodb+srv://alaa:1234678@bootcamp.tvmbu2e.mongodb.net/')
  .then(() => {
    console.log('Connected to the database')

    app.listen(PORT, () => {
      console.log(`Server is listening on http://localhost:${PORT}`)
    })
  })
  .catch((err) => {
    console.error('Database connection error', err)
  })
