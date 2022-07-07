import express from 'express'
import connectDB from './config/db.mjs'
import userRoutes from './routes/userRouter.mjs'
import ticketRoutes from './routes/ticketRouter.mjs'
import requestLogger from './middleware/requestLogger.mjs'
import { handleErrors, notFound } from './middleware/errors.mjs'

// Connect to database
connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(requestLogger)

app.use(express.static('../frontend/dist'))

// Routes
app.use('/api/users', userRoutes)
app.use('/api/tickets', ticketRoutes)

app.use(notFound)
app.use(handleErrors)

export default app
