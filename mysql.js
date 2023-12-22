const mysql = require('mysql');

const connection = msql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 123456,
    database:'my_api'
});

connection.connect((error)=>{
    if (error){
        console.error(error);
    }else{
        console.log('Connected to the database');
    }
});