const requestLogger = (request, response, next) => {
  console.log('---------------')
  console.log(request.method)
  console.log(request.path)
  console.log(request.body)
  console.log('---------------')
  next()
}

export default requestLogger
