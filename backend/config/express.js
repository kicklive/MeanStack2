import express from 'express';
import logger from 'morgan';
import bodyParser from 'bodyParser';
import session from 'express-session';

module.exports = (app, config) => {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(logger('dev'));
    app.use(
        session({
            secret: "mean",
            resave: false,
            saveUninitialized: false
        })
    );
    app.use(express.static(config.rootPath + '/frontend'));
}