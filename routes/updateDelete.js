'use strict';
const express = require('express');

const udRoute = express.Router();

const connection = require('../db');

udRoute.put('/users/:uid', function (req, res, next) {
    const now = new Date().toISOString().slice(0, 19).replace('T', ' ');;
   connection.execute("UPDATE project SET Projects=?, DATE_LASTTIME=? WHERE PROJECTID=?;",

    [req.body.Projects,now, req.params.uid])

     .then(() => {

       console.log('ok');

    }).catch((err) => {

       console.log(err);

    });

     res.status(200).send("Update Successfully.");

});
udRoute.delete('/users/:uid', function (req, res, next) {

    connection.execute("DELETE FROM Project WHERE PROJECTID=?;",
 
     [req.params.uid])
 
      .then(() => {
 
        console.log('ok');
 
     }).catch((err) => {
 
        console.log(err);
 
     });
 
      res.end();
 
 });
udRoute.use('/', function (req, res, next) {

    res.sendStatus(404);


})
module.exports = udRoute;