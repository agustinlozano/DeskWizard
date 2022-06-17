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

  test('fails with status code 400 if the name is shorter than 2', async () => {
    const shortNameUser = {
      name: 'c',
      username: 'CatitoX',
      email: 'cato@gmail.com',
      password: 'BebeIsMyFrien'
    }

    await api
      .post('/api/users')
      .send(shortNameUser)
      .expect(400)
      .expect('Content-Type', /json/)

    const usersFromDB = await User.find({})
    expect(usersFromDB).toHaveLength(0)
  })

  test('fails with status code 400 if the email is shorter than 2', async () => {
    const shortNameUser = {
      name: 'Cato',
      username: 'C',
      email: 'cato@gmail.com',
      password: 'BebeIsMyFrien'
    }

    await api
      .post('/api/users')
      .send(shortNameUser)
      .expect(400)
      .expect('Content-Type', /json/)

    const usersFromDB = await User.find({})
    expect(usersFromDB).toHaveLength(0)
  })

  test('fails with status code 400 if some fild is missing', async () => {
    const incompleteUser = {
      name: 'cato',
      username: 'CatitoX',
      email: 'cato@gmail.com'
    }

    await api
      .post('/api/users')
      .send(incompleteUser)
      .expect(400)
      .expect('Content-Type', /json/)

    const usersFromDB = await User.find({})
    expect(usersFromDB).toHaveLength(0)
  })
})

describe('POST /api/users/login', () => {
  const newUser = {
    name: 'Bebe',
    username: 'MoBB',
    email: 'bebe@gmail.com',
    password: 'CatoIsAnIdiot'
  }

  beforeEach(async () => {
    await api
      .post('/api/users')
      .send(newUser)
  })

  test('an existig user can be logged', async () => {
    const userData = {
      email: newUser.email,
      password: newUser.password
    }

    await api
      .post('/api/users/login')
      .send(userData)
      .expect(200)
  })

  test('a non-existent user cannot be logged', async () => {
    const unknownData = {
      email: 'unknown@email.com',
      password: 'unknown user'
    }

    await api
      .post('/api/users/login')
      .send(unknownData)
      .expect(401)
  })
})

afterAll(() => {
  mongoose.connection.close()
  server.close()
})
