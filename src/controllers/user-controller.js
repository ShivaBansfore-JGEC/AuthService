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
    try{
        const response = await userService.singIn(req.body.email, req.body.password);
        return res.status(200).json({
            success: true,
            data: response,
            error: {},
            message: 'successfully signin'
        });
    }catch(error){
        return res.status(500).json({
            data: {},
            success: false,
            message: 'signin failed!',
            error: error
        })
    }
}

const isAuthenticated = async (req, res) => {
    try{
      const token = req.headers['x-access-token'];
      const response = await userService.isAuthenticated(token);
      return res.status(200).json({
        success: true,
        data: response,
        err: {},
        message: 'Successfully authenticated!'
      })
    }catch(error){
        return res.status(500).json({
            data: {},
            success: false,
            message: 'authentication failed',
            error: error
        })
    }
}

module.exports = {
    create,
    signIn,
    isAuthenticated
}