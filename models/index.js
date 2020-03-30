
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.js`)[env];
const db = {};
const databases = Object.keys(config.databases);

/** Add Databases**/
for (let i = 0; i < databases.length; ++i) {
    let database = databases[i];
    let dbPath = config.databases[database];
    db[database] = new Sequelize(dbPath.database, dbPath.username, dbPath.password, dbPath);
}

/**Add the Database Models**/
//Add models from database1 folder
fs
    .readdirSync(__dirname + '/deliserdang')
    .filter(file =>
        (file.indexOf('.') !== 0) &&
        (file !== basename) &&
        (file.slice(-3) === '.js'))
    .forEach(file => {
        console.log("deli" + file);

        const model = db.Database1.import(path.join(__dirname + '/deliserdang', file));
        db[model.name] = model;
    });


// Add models from database2 folder

fs
    .readdirSync(__dirname + '/medan')
    .filter(file =>
        (file.indexOf('.') !== 0) &&
        (file !== basename) &&
        (file.slice(-3) === '.js'))
    .forEach(file => {
        console.log("medan" + file);

        const model = db.Database2.import(path.join(__dirname + '/medan', file));
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    // console.log(db);
    console.log(modelName);

    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});


module.exports = db;