import type { NextFunction, Request, Response } from "express";
import { User } from "../models/User.js";
import bcrypt from 'bcrypt';

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const saltRounds = 10;
        const hash = await bcrypt.hash(req.body.senha, saltRounds);

        const user = new User({
            ...req.body,
            senha: hash
        });

        const finalUser = await user.save();

        res.status(201).json(finalUser);
    } catch(err) {
        next(err);
    }
}

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
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
