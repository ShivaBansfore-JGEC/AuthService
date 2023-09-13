const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const {PORT} = require('./config/serverConfig');
const apiRoutes = require('./routes/index');

const db = require('./models/index');

const prepareAndStartServer = async () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}))
    app.use('/api', apiRoutes);
    if(process.env.DB_SYNC){
        db.sequelize.sync({alter: true});
    }
    app.listen(PORT, () => {
        console.log(`Server started on PORT: ${PORT}`);
    })
}

prepareAndStartServer();