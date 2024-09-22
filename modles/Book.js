const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
  Title: { type: String, require },
  Author: { type: String, require },
  Price: { type: Number, default: 5 },
  Image: {
    type: String,
    default:
      "https://img.freepik.com/premium-vector/stack-books_119631-472.jpg?w=2000",
  },
});

const book = model("Book", bookSchema);
module.exports = book;
