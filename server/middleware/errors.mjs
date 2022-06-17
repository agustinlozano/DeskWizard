const handleErrors = (error, req, res, next) => {
  console.log(error.message)
  console.log(error.name)
  if (error.name === 'CastError') {
    res.status(400).send({ error: 'id used is malformed' })
  } else if (error.name === 'ValidationError') {
    res.status(400).send({ error: error.message })
  } else if (error.name === 'TypeError') {
    res.status(404).send({ error: error.message })
  } else if (error.name === 'JsonWebTokenError') {
    res.status(401).send({ error: error.message })
  } else if (error.name === 'TokenExpiredError') {
    res.status(401).send({ error: error.message })
  } else if (error.message === 'Invalid credentials') {
    res.status(401).send({ error: error.message })
  } else if (error.message === 'Please include all fields') {
    res.status(400).send({ error: error.message })
  } else {
    res.status(500).end()
  }
}

const notFound = (req, res, next) => {
  res.status(404).send({ error: 'unknown endpoint' })
}

export { handleErrors, notFound }
