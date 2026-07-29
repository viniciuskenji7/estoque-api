import mongoose, { Schema } from "mongoose";
import type IMovimentation from "../interfaces/IMovimentation.js";

const movimentacaoSchema = new Schema<IMovimentation>({
    produto_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'produto',
        required: [true, 'O id do produto nao esta sendo encontrado'],
        autopopulate: true
    },
    usuario_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'usuario',
        required: [true, 'O id do usuario nao esta sendo encontrado'],
        autopopulate: true
    },
    tipo: {type: String},
    quantidade: {type: Number},
    data_hora: {type: Date}
});

export const Movimentation = mongoose.model<IMovimentation>('movimentation', movimentacaoSchema);