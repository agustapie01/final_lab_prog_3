const mysql = require("mysql") //  instalar mysql

//     ---- Creamos la conexion a la db con los respectivos datos ----     //

exports.db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "dentista"
})