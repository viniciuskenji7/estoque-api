import mongoose, { Schema } from "mongoose";
import type ICategory from "../interfaces/ICategory.js";

export const categoriaSchema = new Schema<ICategory>({
    nome: {type: String}
});