const express = require('express');
const app =express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

const writeRead = require('./routes/writeRead');
const writeReaduser = require('./routes/writeReaduser');
const writeReadadmin = require('./routes/writeReadadmin');
const updateDelete = require('./routes/updateDelete');
const updateDeleteuser = require('./routes/updateDeleteuser');
const updateDeleteadmin = require('./routes/updateDeleteadmin');


app.use('/wr',writeRead);
app.use('/us',writeReaduser);
app.use('/wa',writeReadadmin);
app.use('/ud',updateDelete);
app.use('/ut',updateDeleteuser);
app.use('/ua',updateDeleteadmin);
app.use('/',function(req,res,next){
    res.sendStatus(404);
});

app.listen(PORT,()=>
    console.log('Server running on port:' + PORT)
);