const express = require("express");
const BookRouter = express.Router();
const upload = require("../../middleware/multer");
const {
  GetAllBooks,
  GetBookById,
  CreatBook,
  UpdateBook,
  DeleteBook,
} = require("./Books.Controller");
BookRouter.get("/Books", GetAllBooks);
BookRouter.get("/Book/:id", GetBookById);
BookRouter.post("/CreatBook", upload.single("Image"), CreatBook);
BookRouter.put("/UpdateBook/:id", upload.single("Image"), UpdateBook);
BookRouter.delete("/DeleteBook/:id", DeleteBook);

module.exports = BookRouter;
