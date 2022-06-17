import mongoose from 'mongoose'

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      minlength: 2,
      required: [true, 'Please add a name']
    },
    username: {
      type: String,
      minlength: 2,
      unique: true,
      required: [true, 'Please add a username']
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true
    },
    password: {
      type: String,
      required: [true, 'Please add a password']
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  {
    timestamps: true
  }
)

export default mongoose.model('User', userSchema)
