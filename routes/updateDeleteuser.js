'use strict';
const express = require('express');

const udRoute = express.Router();

const connection = require('../db');

udRoute.put('/users/:uid', function (req, res, next) {
    const now = new Date().toISOString().slice(0, 19).replace('T', ' ');;
   connection.execute("UPDATE user SET PROJECTID=? WHERE PROJECTID=?,Name=? ,DATE=?,Sex=? ,Rank=?;",

    [req.body.PROJECTID,Name,DATE,Sex,Rank, req.params.uid])

     .then(() => {

       console.log('ok');

    }).catch((err) => {

       console.log(err);

    });

     res.status(200).send("Update Successfully.");

});
module.exports = udRoute;