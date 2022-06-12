import express from 'express'
import { protect } from '../middleware/authorization.mjs'
import {
  registerUser,
  loginUser,
  getMe
} from '../controllers/userController.mjs'

const router = express.Router()

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)

export default router
