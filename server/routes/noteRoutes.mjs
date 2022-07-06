import express from 'express'
import { getNotes, addNote } from '../controllers/noteController.mjs'
import { protect } from '../middleware/authorization.mjs'

const router = express.Router({ mergeParams: true })

router.route('/')
  .get(protect, getNotes)
  .post(protect, addNote)

export default router
