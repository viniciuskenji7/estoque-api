import type IProductDTO from "../infrastructure/dto/IProductDTO.js";
import { Product } from "../models/Product.js";


export class ProductService {

    static async create(data: IProductDTO) {
        const product = new Product({
            ...data
        });
        return await product.save();
    }

    
}