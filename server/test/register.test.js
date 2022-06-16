// import mongoose from 'mongoose'
import mongoose from 'mongoose'
import server from '../index.mjs'
import User from '../models/User.mjs'
import { api } from './helper.mjs'

beforeEach(async () => {
  await User.deleteMany({})
})

describe('POST /api/users', () => {
  test('create a new user returns status 201 "created"', async () => {
    const newUser = {
      name: 'cato',
      username: 'CatitoX',
      email: 'cato@gmail.con',
      password: 'BebeIsMyFriend'
    }

    await api
      .post('/api/users')
      .send(newUser)
      .expect(201)
      .expect('Content-Type', /json/)

    const usersFromDB = await User.find({})
    expect(usersFromDB).toHaveLength(1)
  })
})

afterAll(() => {
  mongoose.connection.close()
  server.close()
})
