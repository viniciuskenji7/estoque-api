import type { NextFunction, Request, Response } from "express";
import { User } from "../models/User.js";
import bcrypt from 'bcrypt';
import { UserService } from "../services/userService.js";

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await UserService.create(req.body);

        res.status(201).json({
            message: 'Usuario criado com sucesso',
            user
        });
    } catch(err) {
        next(err);
    }
}

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch(err) {
        next(err);
    }
}

export const getUserById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id
        const userById = await User.findById(id).exec();

        if (userById !== null) {
            res.status(200).send(userById);
        } else {
            console.log('Id do usuario não encontrado');
        }
    } catch(err) {
        next(err);
    }
}

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const userUpdate = await User.findByIdAndUpdate(id, req.body);
        if (userUpdate !== null) {
            res.status(200).send({
                message: 'Usuario atualizado com sucesso',
                userUpdate
            });
        } else {
            next();
        }
    } catch(err) {
        next(err);
    }
}
export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const userUpdate = await User.findByIdAndDelete(id);
        if (userUpdate !== null) {
            res.status(200).send({
                message: 'Usuario deletado com sucesso',
            });
        } else {
            next();
        }
    } catch(err) {
        next(err);
    }
}
