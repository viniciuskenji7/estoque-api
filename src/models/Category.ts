import mongoose from "mongoose";

export const categoriaSchema = new mongoose.Schema({
    id: {type: String},
    nome: {type: String}
});