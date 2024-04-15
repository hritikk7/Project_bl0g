//404 routes

const notFound = (req, res, next) => {
  const error = new Error(`Not found -${req.originalUrl}`);
  res.status(404);
  next(error);
};


//to handle errors

const errorHandler = (error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  console.log(error);
  res
    .status(error.code || 500)
    .json({ message: error.message || "Unknown error occoured" });
};


module.exports = {notFound, errorHandler}
