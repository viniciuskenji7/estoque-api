import mongoose from 'mongoose';


export const productSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    nome: {type: String},
    quantidade_atual: {type: Number},
    quantidade_minima: {type: Number},
})