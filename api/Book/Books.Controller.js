const book = require("../../modles/Book");

const GetAllBooks = async (req, res, next) => {
  try {
    const Books = await book.find();
    return res.status(200).json({ data: Books });
  } catch (error) {
    next(error);
  }
};

const CreatBook = async (req, res, next) => {
  try {
    const newBook = await book.create(req.body);
    return res.status(201).json({ data: newBook });
  } catch (error) {
    next(error);
  }
};
const GetBookById = async (req, res, next) => {
  try {
    const Book = await book.findById(req.params.id);
    if (!Book) {
      return res.status(404).json("Book Not Found");
    }
    return res.status(200).json(Book);
  } catch (error) {
    next(error);
  }
};
const UpdateBook = async (req, res, next) => {
  try {
    const UpdateBook = await book.findByIdAndUpdate(req.params.id, req.body);
    if (!UpdateBook) {
      return res.status(404).json("Book Not Found");
    }

    return res.status(200).json(UpdateBook);
  } catch (error) {
    next(error);
  }
};

const DeleteBook = async (req, res, next) => {
  try {
    const BookFound = await book.findByIdAndDelete(req.params.id);
    if (!BookFound) {
      return res.status(404).json("Book Not Found");
    }
    return res.status(200).json("Book Deleted");
  } catch (error) {
    next(error);
  }
};
module.exports = {
  GetAllBooks,
  GetBookById,
  CreatBook,
  UpdateBook,
  DeleteBook,
};
