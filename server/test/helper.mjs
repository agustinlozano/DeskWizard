import app from '../app.mjs'
import supertest from 'supertest'

const api = supertest(app)

export { api }
