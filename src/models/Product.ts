import mongoose, { Schema } from 'mongoose';
import type IProduct from '../interfaces/IProduct.js';

const productSchema = new Schema<IProduct>({
    nome: {type: String},
    quantidade_atual: {type: Number},
    quantidade_minima: {type: Number},
    categoria_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categoria',
        required: [true, 'A categoria é obrigatória'],
        autopopulate: true                                                                                            
    }
});


export const Product = mongoose.model<IProduct>('product', productSchema);