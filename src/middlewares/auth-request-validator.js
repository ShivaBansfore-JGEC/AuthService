
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

module.exports = {
    validateUserAuth
}