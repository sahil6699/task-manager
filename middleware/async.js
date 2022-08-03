const asyncWrapper = (fn) => {
  //in express we by default get -> req, res, next
  //i want to pass the req, res, next down to my function, down to my controller
  return async (req, res, next) => {
    try {
      await fn(req, res, next)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = asyncWrapper
