const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();
const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGOO_DB_URL);
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
