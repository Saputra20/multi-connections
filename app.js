const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const con_deliserdang = require('./config/db_deliserdang');
const con_medan = require('./config/db_medan');

const medan_controller = require('./controllers/userController');

var deliserdang = con_deliserdang.sequelize;
var medan = con_medan.sequelize;

deliserdang.authenticate()
    .then(() => console.log('Connected To Database Deliserdang'))
    .catch(err => console.log('Error:' + err));

medan.authenticate()
    .then(() => console.log('Connected To Database Medan'))
    .catch(err => console.log('Error:' + err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/v1', medan_controller);

app.get('/', (req, res) => {
    console.log('wellcome');
    res.json({
        message: "wellcome"
    });
});


module.exports = app