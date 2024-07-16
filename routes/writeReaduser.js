'use strict';

const express = require('express');
const crypto = require('crypto');
const wrRoute = express.Router();
const connection = require('../db');
wrRoute.post('/Rusers',function(req,res,next){
    const { PROJECTID,Name,Sex,Rank  } = req.body;

    if (!PROJECTID|| !Name || !Sex || !Rank) {
        return res.status(400).send('Missing required fields');
    }

    
    const now = new Date().toISOString().slice(0, 19).replace('T', ' ');;
    connection.execute(`INSERT INTO user(PROJECTID,Name,DATE,Sex,Rank) VALUES(?,?,?,?,?);`,
    [PROJECTID,Name,now,Sex,Rank,
        ]).then(() => {
       
           console.log('ok');
       
        }).catch((err) => {
       
            console.log(err);
       
        });
            
            res.end();
       
       });
       module.exports = wrRoute;
       wrRoute.get('/uss', function (req, res, next) {

        connection.execute('SELECT * FROM user;')
    
        .then((result) => {
    
           var rawData = result[0];
    
           res.send(JSON.stringify(rawData));
    
        }).catch((err) => {
    
           console.log(err);
    
           res.end();
    
        });
    
    });
       module.exports = wrRoute;
