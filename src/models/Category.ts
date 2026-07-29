import mongoose, { Schema } from "mongoose";
import type ICategory from "../interfaces/ICategory.js";

const categoriaSchema = new Schema<ICategory>({
    nome: {type: String}
});

export const Category = mongoose.model<ICategory>('category', categoriaSchema);