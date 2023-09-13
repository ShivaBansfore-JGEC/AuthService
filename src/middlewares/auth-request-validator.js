
const validateUserAuth = async (req, res, next) => {
    if(!req.body.email || !req.body.password){
        return res.status(400).json({
            data:{},
            success: false,
            message:'something went wrong',
            error: 'email or password is missing !'
        })
    }

    next();
}

const validateIsAdminRequest = (req, res, next) => {
    if(!req.body.id){
        return res.status(400).json({
            success: false,
            data: {},
            error: "user id is missing!",
            message: 'somthing went wrong'
        })
    }
    next();
}

module.exports = {
    validateUserAuth,
    validateIsAdminRequest
}