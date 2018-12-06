import path from 'path';
let rootPath = path.normalize(__dirname + '/../../');
module.exports = {
    development: {
        db: 'mongodb://localhost/Issues',
        rootPath: rootPath,
        port: process.env.PORT || 4000

    },
    production: {
        db: 'mongodb://kicklive:spendtracker@ds117858.mlab.com:17858/spendtracker2018',
        rootPath: rootPath,
        port: process.env.PORT || 80

    }
};