import dotenv from 'dotenv'
import express from 'express'
import connectDB from './config/db.mjs'
import logger from './utils/logger.js'
import userRoutes from './routes/userRouter.mjs'
import requestLogger from './middleware/requestLogger.mjs'
dotenv.config()

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

const PORT = process.env.PORT || 5000
app.listen(PORT, () => logger.info(`Server started on port ${PORT}`))
