import bcrypt from 'bcrypt';
import { User } from '../models/User.js';
import type IUser from '../interfaces/IUser.js';
import { hashPassword } from './bcryptService.js';

export class UserService {
    
    static async create(data: IUser) {
        const user = new User({
            ...data
        });
        return await user.save();
    }

    static async findByEmail(data: string) {
        const exists = await User.findOne({
            email: data
        });
        return exists;
    }
}