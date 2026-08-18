import type { LoginDTO } from "../infrastructure/dto/ILoginDTO.js";
import type { IRegisterDTO } from "../infrastructure/dto/IRegisterDTO.js";
import { verificarEmailRegex } from "../utils/verificadorDeEmail.js";
import jwt from 'jsonwebtoken';
import { comparePassword, hashPassword } from "./bcryptService.js";
import bcrypt from 'bcrypt';
import { UserService } from "./userService.js";

const JWT_SECRET = process.env.JWT_SECRET || 'minha_senha_secreta_123';
export class AuthService {

    static async register(data: IRegisterDTO) {
        const {
            nome,
            email,
            senha,
        } = data;
        
        if (!verificarEmailRegex(email)) {
            throw new Error('Email inválido');
        }

        const emailExists = await UserService.findByEmail(email);

        if (emailExists) {
            throw new Error('Este email ja esta em uso');
        }

        if (senha.length < 6) {
            throw new Error('A senha precisa ser maior que 6 caracteres');
        }

        const senhaHash = await hashPassword(senha);
        
        const user = await UserService.create({
            nome,
            email,
            senha: senhaHash,
            role: 'USER'
        });
        
        const token = jwt.sign({id: user.id}, JWT_SECRET);

        return {
            token,
            user
        }
    }

    static async login(data: LoginDTO) {
        const { email, senha } = data;

        const user = await UserService.findByEmail(email);
        
        if (!user) {
            throw new Error('Email inválido');
        }

        const isPasswordValid = await comparePassword(senha, user.senha);
        
        if (!isPasswordValid) {
            throw new Error('Senha inválida');
        }

        const token = jwt.sign({id: user.id}, JWT_SECRET, { expiresIn: '1h' });

        return {
            user,
            token
        }
    }

}