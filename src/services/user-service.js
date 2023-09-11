const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserRepository = require('../repositories/user-repository');
const { JWT_KEY } = require('../config/serverConfig');
class UserService {
    constructor(){
        this.userRepository = new UserRepository();
    }

    async create(data){
        try{
            const user = await this.userRepository.create(data);
            return user;
        }catch(error){
            console.log('something went wrong int the service layer');
            throw error;
        }
    }

    async singIn(email, plainPassword){
        try{
            //step1: fetch the use using email
            const user = await this.userRepository.getByEmail(email);
            //step2: compare palin password with stored encrypted password
            const passwordMatch = this.checkPassword(plainPassword, user.password);
            if(!passwordMatch){
                console.log('Password do not matched!');
                throw {error: 'Incorrect password'}
            }

            const newJwtToken = this.createToken({email: user.email, id:user.id});
            return newJwtToken;

        }catch(error){
            console.log('something went wrong in the signin process!')
            throw error;
        }
    }

    createToken(user){
        try{
            const result = jwt.sign(user, JWT_KEY, {expiresIn: '1d'});
            return result;
        }catch(error){
            console.log('something went wrong in the service layer!');
            throw error;
        }
    }

    verifyToken(token){
        try{
            const result = jwt.verify(token, JWT_KEY);
            return result;
        }catch(error){
            console.log('something went wrong in verifying token!', error);
            throw error;
        }
    }

    checkPassword(userInputPlainPassword, encryptedPassword){
        try{
            const result = bcrypt.compareSync(userInputPlainPassword, encryptedPassword);
            return result;
        }catch(error){
            console.log('somthing went wrong in checkin password!');
            throw error;
        }
    }
}

module.exports = UserService;