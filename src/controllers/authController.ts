import type { Request, Response, NextFunction } from 'express';
import { UserService } from '../services/userService.js';
import jwt from 'jsonwebtoken';
import { hashPassword } from '../services/bcryptService.js';
import bcrypt from 'bcrypt';

const JWT_SECRET = process.env.JWT_SECRET || 'minha_senha_secreta_123';

export const register = async (req: Request, res: Response, next: NextFunction) => {
    const {
        nome,
        email,
        senha,
    } = req.body;

    const user = await UserService.create({
        nome,
        email,
        senha,
        role: 'USER'
    });

    const token = jwt.sign({id: user.id}, JWT_SECRET);
    return res.status(201).json({
        token,
        user
    });
}


export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, senha } = req.body;

        const user = await UserService.findByEmail(email);
        if (!user) {
            return res.status(401).json({
                error: 'Credenciais inválidas'
            });
        }

        const isPasswordValid = await bcrypt.compare(senha, user.senha);
        if (!isPasswordValid) {
            return res.status(401).json({
                error: 'Credenciais inválidas'
            });
        }

        const token = jwt.sign({id: user.id}, JWT_SECRET, { expiresIn: '1h' });
        return res.status(200).json({
            token,
            user: {
                id: user.id,
                email: user.email  
            }
        });
    } catch (error) {
        next(error);
    }
}

export const logout = async (req: Request, res: Response, next: NextFunction) => {
    
}