import mongoose from 'mongoose'
import server from '../index.mjs'
import Ticket from '../models/Ticket.mjs'
import User from '../models/User.mjs'
import { api } from './helper.mjs'
import getAnUserToken from './user_helper.mjs'

beforeEach(async () => {
  await Ticket.deleteMany({})
  await User.deleteMany({})
})

describe('GET /api/tickets', () => {
  test('all tickets can be accessed by passing a token', async () => {
    const { token } = await getAnUserToken()

    await api
      .get('/api/tickets')
      .set('Authorization', 'Bearer ' + token)
      .expect(200)
  })

  test('tickets cannot be accessed without token', async () => {
    const { token } = 'invalid token'

    await api
      .get('/api/tickets')
      .set('Authorization', 'Bearer ' + token)
      .expect(401)
  })
})

describe('POST /api/tickets', () => {
  test('an existing user can create a new ticket', async () => {
    const { token, userData } = await getAnUserToken()
    const ticketData = {
      user: userData,
      product: 'Macbook Air',
      description: 'I finally have my new Macbook Air'
    }

    await api
      .post('/api/tickets')
      .send(ticketData)
      .set('Authorization', 'Bearer ' + token)
      .expect(200)
  })
})

afterAll(() => {
  mongoose.connection.close()
  server.close()
})
