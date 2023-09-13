const AppErrors = require('./error-handlers');
const {ClientErrorsCodes} = require('./error-codes');

class ValidationErrors extends AppErrors {
    constructor(error){
        let errorName = error.name;
        let explaination = [];
        error.errors.forEach( err => {
            explaination.push(err.message)
        })
        super(
            errorName,
            'not able to validate data sent in the request',
            explaination,


        );
    }
}

module.exports = ValidationErrors;