import mongoose, { Document } from 'mongoose';


export default interface IProduct extends Document {
    nome: string;
    quantidade_atual: number;
    quantidade_minima: number;
    categoria_id: mongoose.Types.ObjectId;
}