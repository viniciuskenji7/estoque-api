import bcrypt from 'bcrypt';
import { User } from '../models/User.js';
import type IUser from '../interfaces/IUser.js';
import { hashPassword } from './bcryptService.js';

export class UserService {
    
    static async create(data: IUser) {
        const password = await hashPassword(data.senha);

        const exists = await User.findOne({
            email: data.email
        });

        if (exists) {
            throw new Error('Email ja cadastrado');
        }

        const user = new User({
            ...data,
            senha: password
        });
        return await user.save();
    }


}