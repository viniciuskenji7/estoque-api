import mongoose, { Document } from 'mongoose';


export default interface IMovimentation extends Document {
    produto_id: mongoose.Types.ObjectId;
    usuario_id: mongoose.Types.ObjectId
    tipo: 'ENTRADA' | 'SAIDA';
    quantidade: number;
    data_hora: Date;
}