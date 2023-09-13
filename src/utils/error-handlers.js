const {ServerErrorsCodes} = require('./error-codes')
class AppErrors extends Error {
    constructor(
        name = 'app error', 
        message = 'somthing went wrong!',
        explaination = 'somthing went wrong!',
        statusCode = ServerErrorsCodes.INTERNAL_SERVER_ERROR)
        {
            super();
            this.name = name;
            this.message = message;
            this.explaination = explaination;
            this.statusCode = statusCode;
    }
}

module.exports = AppErrors;