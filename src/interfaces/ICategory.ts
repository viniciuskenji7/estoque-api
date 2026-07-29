import type { Document } from "mongoose";


export default interface ICategory extends Document {
    nome: string;
}