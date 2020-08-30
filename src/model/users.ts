import bcrypt from 'bcryptjs'

export class User{
    constructor(public name:string, public email:string, public password:string) {
    }
    
    static hashPassword(password:string){
        return bcrypt.hashSync(password, 10);
    }

    static isValid(password: string, hashedPassword: string){
        return bcrypt.compareSync(password, hashedPassword)
    }
}