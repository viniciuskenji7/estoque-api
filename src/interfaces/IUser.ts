

export default interface IUser {
    nome: string;
    email: string;
    senha: string;
    role: 'USER' | 'ADMIN';
}