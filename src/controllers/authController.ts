import type { Request, Response, NextFunction } from 'express';
import { UserService } from '../services/userService.js';
import { hashPassword } from '../services/bcryptService.js';
import bcrypt from 'bcrypt';
import { AuthService } from '../services/authService.js';


export const register = async (req: Request, res: Response, next: NextFunction) => {
    
    const registerUser = await AuthService.register(req.body);
    return res.status(201).json({
        message: 'Usuario registrado com sucesso',
        registerUser
    });
}


export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const loginUser = await AuthService.login(req.body);
        return res.status(200).json({
            message: 'Login realizado com sucesso',
            loginUser
        });
    } catch (error) {
        next(error);
    }
}

// export const logout = async (req: Request, res: Response, next: NextFunction) => {
    
// }