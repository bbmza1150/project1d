'use strict';
const express = require('express');

const uaRoute = express.Router();

const connection = require('../db');

uaRoute.put('/udua/:uid', function (req, res, next) {
    const now = new Date().toISOString().slice(0, 19).replace('T', ' ');
   connection.execute("UPDATE admin SET admin_user=? ,admin_password=?,admin_Fname=? ,admin_Lname=? ,admin_image=? ,admin_tel=? ,admin_email=? WHERE admin_id=?;",

    [req.body.admin_user,req.body.admin_password,req.body.admin_Fname,req.body.admin_Lname,req.body.admin_image,req.body.admin_tel,req.body.admin_email, req.params.uid])

     .then(() => {

       console.log('ok');

    }).catch((err) => {

       console.log(err);

    });

     res.status(200).send("Update Successfully.");

});
uaRoute.delete('/ddad/:uid', function (req, res, next) {

    connection.execute("DELETE FROM admin WHERE admin_id=?;",
 
     [req.params.uid])
 
      .then(() => {
 
        console.log('ok');
 
     }).catch((err) => {
 
        console.log(err);
 
     });
 
      res.end();
 
 });
 uaRoute.use('/', function (req, res, next) {
 
    res.sendStatus(404);
 
 
 })
module.exports = uaRoute;