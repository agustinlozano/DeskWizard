import express from 'express'
import connectDB from './config/db.mjs'
import userRoutes from './routes/userRouter.mjs'
import requestLogger from './middleware/requestLogger.mjs'

// Connect to database
connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(requestLogger)

// Routes
app.get('/', (req, res) => {
  res.status(200).send('<h1>Hello, World!</h1>')
})

app.use('/api/users', userRoutes)

export default app
