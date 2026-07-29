import mongoose from 'mongoose';

export const productSchema = new mongoose.Schema({
    id: {type: String},
    nome: {type: String},
    quantidade_atual: {type: Number},
    quantidade_minima: {type: Number},
    categoria_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categoria',
        required: [true, 'A categoria é obrigatória'],
        autopopulate: true                                                                                            
    }
})