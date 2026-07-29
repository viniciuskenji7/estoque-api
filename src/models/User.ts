import mongoose, { Schema } from 'mongoose';
import type IUser from '../interfaces/IUser.js';


const userSchema = new Schema<IUser>({
    nome: {
        type: String,
        // required: [true, 'O nome é obrigatório']
    },
    email: {
        type: String,
        // required: [true, 'O email é obrigatório']
    },
    senha: {
        type: String,
        // required: [true, 'A senha é obrigatória']

    }
});

export const User = mongoose.model<IUser>('user', userSchema); 