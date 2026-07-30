import type { NextFunction, Request, Response } from "express";
import bcrypt from 'bcrypt';
import { Category } from "../models/Category.js";

export const createCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let category = new Category(req.body);
        const newCategory = await category.save();

        if (newCategory !== null) {
            res.status(200).send({
                message: 'Categoria criada com sucesso',
                category: newCategory
            });
        } else {
            next();
        }
    } catch(err) {
        next(err);
    }
}

export const getCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const category = await Category.find();
        res.status(200).send(category);
    } catch(err) {
        next(err);
    }
}

export const getCategoryById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id
        const categoryById = await Category.findById(id).exec();

        if (categoryById !== null) {
            res.status(200).send(categoryById);
        } else {
            console.log('Id da cateogria não encontrado');
        }
    } catch(err) {
        next(err);
    }
}

export const updateCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const categoryUpdate = await Category.findByIdAndUpdate(id, req.body);
        if (categoryUpdate !== null) {
            res.status(200).send({
                message: 'Categoria atualizada com sucesso',
                categoryUpdate
            });
        } else {
            next();
        }
    } catch(err) {
        next(err);
    }
}
export const deleteCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const categoryDelete = await Category.findByIdAndDelete(id);
        if (categoryDelete !== null) {
            res.status(200).send({
                message: 'Categoria deletada com sucesso',
            });
        } else {
            next();
        }
    } catch(err) {
        next(err);
    }
}
