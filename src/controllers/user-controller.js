const UserService = require('../services/user-service');

const userService = new UserService();

const create = async (req, res) => {
    try{
        const response = await userService.create({
            email: req.body.email,
            password: req.body.password
        });
        return res.status(201).json({
            data: response,
            status: true,
            message: 'successfully created a new user !',
            error: {}
        })
    }catch(error){
        console.log('error:', error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'something went wrong',
            error: error
        })
    }
}

const signIn = async (req, res) => {
    console.log('called:', req.body)
    try{
        const response = await userService.singIn(req.body.email, req.body.password);
        return res.status(200).json({
            success: true,
            data: response,
            error: {},
            message: 'successfully signin'
        });
    }catch(error){
        console.log('something went wrong in user controller!', error)
        throw error;
    }
}

module.exports = {
    create,
    signIn
}