import express from 'express'
import connectDB from './config/db.mjs'
import logger from './utils/logger.js'
import dotenv from 'dotenv'
dotenv.config()

// Connect to database
connectDB()

const app = express()

// Routes
app.get('/', (req, res) => {
  res.status(200).send('<h1>Hello, World!</h1>')
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => logger.info(`Server started on port ${PORT}`))
