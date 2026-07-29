import mongoose from 'mongoose';


export default interface IMovimentation {
    produto_id: mongoose.Schema.Types.ObjectId;
    tipo: 'ENTRADA' | 'SAIDA';
    quantidade: number;
    data_hora: Date;
}