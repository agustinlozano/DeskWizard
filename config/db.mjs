import mongoose from 'mongoose'
import config from '../config/config.mjs'
import logger from '../middleware/logger.mjs'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.MONGO_URI)
    logger.info(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    logger.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

export default connectDB
