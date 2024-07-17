'use strict';
const express = require('express');

const utRoute = express.Router();

const connection = require('../db');

utRoute.put('/utuser/:uid', function (req, res, next) {
    const now = new Date().toISOString().slice(0, 19).replace('T', ' ');
   connection.execute("UPDATE user SET Name=? ,DATE=?,Sex=? ,Rank=? WHERE UserID=?;",

    [req.body.Name,req.body.Date,req.body.Sex,req.body.Rank, req.params.uid])

     .then(() => {

       console.log('ok');

    }).catch((err) => {

       console.log(err);

    });

     res.status(200).send("Update Successfully.");

});
utRoute.delete('/users/:uid', function (req, res, next) {

   connection.execute("DELETE FROM user WHERE UserID=?;",

    [req.params.uid])

     .then(() => {

       console.log('ok');

    }).catch((err) => {

       console.log(err);

    });

     res.end();

});
utRoute.use('/', function (req, res, next) {

   res.sendStatus(404);


})
module.exports = utRoute;