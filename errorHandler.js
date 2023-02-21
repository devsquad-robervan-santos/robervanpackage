function errorHandler() {
    return (err, req, res, next) => {
      if (err instanceof TypeError) {
        return res.status(400).json(err.name + ": " + err.message);
      }
      if (err && err.statusCode) {
        return res.status(err.statusCode).json(err.body);
      }
      return next(err);
    }
  }

  module.exports = errorHandler;
