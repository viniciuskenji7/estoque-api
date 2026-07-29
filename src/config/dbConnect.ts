import mongoose from "mongoose"

mongoose.connect(process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/livraria');

let db = mongoose.connection;

export default db;