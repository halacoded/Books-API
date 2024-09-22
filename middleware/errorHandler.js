const ErrorHandler = (error, req, res, next) => {
  try {
    return res
      .status(error.status || 500)
      .json({ error: error || "Interval Server error" });
  } catch (error) {
    next(error);
  }
};

module.exports = ErrorHandler;
