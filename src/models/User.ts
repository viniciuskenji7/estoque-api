import mongoose from 'mongoose';


export const userSchema = new mongoose.Schema({
    id: {type: String},
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
})