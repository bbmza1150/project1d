'use strict';

const express = require('express');
const crypto = require('crypto');
const waRoute = express.Router();
const connection = require('../db');
waRoute.post('/Rusers',function(req,res,next){
    const { admin_user, admin_password , admin_Fname , admin_Lname , admin_image ,admin_tel ,admin_email  } = req.body;

    if (!admin_user|| !admin_password || !admin_Fname || !admin_Lname || !admin_image || !admin_tel || !admin_email ) {
        return res.status(400).send('Missing required fields');
    }

    
    const now = new Date().toISOString().slice(0, 19).replace('T', ' ');;
    connection.execute(`INSERT INTO user(admin_id,admin_user,admin_password,admin_Fname , admin_Lname , admin_image ,admin_tel ,admin_email) VALUES(?,?,?,?,?,?,?,?);`,
    [admin_user,admin_password, admin_Fname , admin_Lname , admin_image ,admin_tel ,admin_email,
        ]).then(() => {
       
           console.log('ok');
       
        }).catch((err) => {
       
            console.log(err);
       
        });
            
            res.end();
       
       });
       module.exports = waRoute;
       waRoute.get('/ad', function (req, res, next) {

        connection.execute('SELECT * FROM admin;')
    
        .then((result) => {
    
           var rawData = result[0];
    
           res.send(JSON.stringify(rawData));
    
        }).catch((err) => {
    
           console.log(err);
    
           res.end();
    
        });
    
    });
       module.exports = waRoute;