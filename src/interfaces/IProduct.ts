import mongoose from 'mongoose';


export default interface IProduct {
    nome: string;
    quantidade_atual: number;
    quantidade_minima: number;
    categoria_id: mongoose.Schema.Types.ObjectId;
}