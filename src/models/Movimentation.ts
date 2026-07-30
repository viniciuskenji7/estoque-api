import mongoose, { Schema } from "mongoose";
import type IMovimentation from "../interfaces/IMovimentation.js";
import mongooseAutoPopulate from "mongoose-autopopulate";

const movimentacaoSchema = new Schema<IMovimentation>({
    produto_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product',
        required: [true, 'O id do produto nao esta sendo encontrado'],
        autopopulate: true
    },
    usuario_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: [true, 'O id do usuario nao esta sendo encontrado'],
        autopopulate: true
    },
    tipo: {type: String},
    quantidade: {type: Number},
    data_hora: {type: Date}
});

movimentacaoSchema.plugin(mongooseAutoPopulate as any);

export const Movimentation = mongoose.model<IMovimentation>('movimentation', movimentacaoSchema);