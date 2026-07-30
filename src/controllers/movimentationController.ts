import type { NextFunction, Request, Response } from "express";
import { Movimentation } from "../models/Movimentation.js";

export const createMovimentation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let movimentation = new Movimentation({
            ...req.body,
            data_hora: Date.now()
        });

        const newMovimentation = await movimentation.save();
        if (newMovimentation !== null) {
            res.status(201).send({
                message: 'Movimentação realizada com sucesso',
                movimentation: newMovimentation
            });
        } else {
            next();
        }
    } catch(err) {
        next(err);
    }
}

export const getMovimentation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const movimentation = await Movimentation.find();
        res.status(200).send(movimentation);
    } catch(err) {
        next(err);
    }
}

export const getMovimentationById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id
        const movimentationById = await Movimentation.findById(id).exec();

        if (movimentationById !== null) {
            res.status(200).send(movimentationById);
        } else {
            console.log('Id da movimentação não encontrado');
        }
    } catch(err) {
        next(err);
    }
}

// export const updateMovimentation = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const id = req.params.id;
//         const movimentationUpdate = await Movimentation.findByIdAndUpdate(id, req.body);
//         if (movimentationUpdate !== null) {
//             res.status(200).send({
//                 message: ' atualizado com sucesso',
//                 movimentationUpdate
//             });
//         } else {
//             next();
//         }
//     } catch(err) {
//         next(err);
//     }
// }

export const deleteMovimentation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const movimentationUpdate = await Movimentation.findByIdAndDelete(id);
        if (movimentationUpdate !== null) {
            res.status(200).send({
                message: 'Movimentação deletada com sucesso'
            });
        } else {
            next();
        }
    } catch(err) {
        next(err);
    }
}
