const NotFoundHandller = (req, res, next) => {
  try {
    return res.status(404).json({ error: "Path Not Found" });
  } catch (error) {
    next(error);
  }
};
module.exports = NotFoundHandller;
