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

module.exports = {
    create
}