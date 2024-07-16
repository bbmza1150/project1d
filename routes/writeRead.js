'use strict';

const express = require('express');
const crypto = require('crypto');
const wrRoute = express.Router();
const connection = require('../db');
wrRoute.post('/users',function(req,res,next){
    const { Project, FILE_NAME,  } = req.body;

    if (!Project|| !FILE_NAME) {
        return res.status(400).send('Missing required fields');
    }

    
    const now = new Date().toISOString().slice(0, 19).replace('T', ' ');;
    connection.execute(`INSERT INTO Project(Projects,FILE,DATE_START,DATE_LASTTIME) VALUES(?,?,?,?);`,
    [Project,FILE_NAME, now, now ,
        ]).then(() => {
       
           console.log('ok');
       
        }).catch((err) => {
       
            console.log(err);
       
        });
            
            res.end();
       
       });

       module.exports = wrRoute;
       wrRoute.get('/users', function (req, res, next) {

        connection.execute('SELECT * FROM project;')
    
        .then((result) => {
    
           var rawData = result[0];
    
           res.send(JSON.stringify(rawData));
    
        }).catch((err) => {
    
           console.log(err);
    
           res.end();
    
        });
    
    });
    module.exports = wrRoute;