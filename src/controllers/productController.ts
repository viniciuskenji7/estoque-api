import type { NextFunction, Request, Response } from "express";
import { Product } from "../models/Product.js";
import bcrypt from 'bcrypt';

export const createProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let newProduct = new Product(req.body);
        const productResult = await newProduct.save();
        if (productResult !== null) {
            res.status(201).send({
                message: 'Produto criado com sucesso',
                product: productResult
            });
        } else {
            next();
        }
    } catch(err) {
        next(err);
    }
}

export const getProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const products = await Product.find();
        res.status(200).send(products);
    } catch(err) {
        next(err);
    }
}

export const getProductById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id
        const productById = await Product.findById(id).exec();

        if (productById !== null) {
            res.status(200).send(productById);
        } else {
            console.log('Id do produto não encontrado');
        }
    } catch(err) {
        next(err);
    }
}

export const updateProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const productUpdate = await Product.findByIdAndUpdate(id, req.body);
        if (productUpdate !== null) {
            res.status(200).send({
                message: 'Produto atualizado com sucesso',
                product: productUpdate
            });
        } else {
            next();
        }
    } catch(err) {
        next(err);
    }
}
export const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const productUpdate = await Product.findByIdAndDelete(id);
        if (productUpdate !== null) {
            res.status(200).send({
                message: 'Produto deletado com sucesso',
            });
        } else {
            next();
        }
    } catch(err) {
        next(err);
    }
}
