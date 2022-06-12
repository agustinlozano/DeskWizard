import dotenv from 'dotenv'

dotenv.config()

const LOCAL = 5000
const PORT = process.env.PORT
let MONGO_URI = process.env.MONGO_URI

if (process.env.NODE_ENV === 'test') {
  MONGO_URI = process.env.MONGO_URI_TEST
}

export default {
  PORT,
  MONGO_URI,
  LOCAL
}
