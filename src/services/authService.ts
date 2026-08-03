import type { LoginDTO } from "../infrastructure/dto/loginDTO.js";
import { comparePassword } from "./bcryptService.js";



export class AuthService {

    static async login(data: LoginDTO) {
        // const compare = comparePassword(data.senha, )
    }

}