import app from './app.mjs'
import http from 'http'
import logger from './middleware/logger.mjs'
import config from './config/config.mjs'

const server = http.createServer(app)

const PORT = config.PORT || config.LOCAL
server.listen(PORT, () => logger.info(`Server started on port ${PORT}`))
