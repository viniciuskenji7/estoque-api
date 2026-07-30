import mongoose, { Schema } from 'mongoose';
import type IProduct from '../interfaces/IProduct.js';
import mongooseAutoPopulate from 'mongoose-autopopulate';

const productSchema = new Schema<IProduct>({
    nome: {type: String},
    quantidade_atual: {type: Number},
    quantidade_minima: {type: Number},
    categoria_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category',
        required: [true, 'A categoria é obrigatória'],
        autopopulate: true                                                                                            
    }
});
productSchema.plugin(mongooseAutoPopulate as any);

export const Product = mongoose.model<IProduct>('product', productSchema);