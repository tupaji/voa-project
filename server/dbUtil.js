import mysql from "mysql";

export const dbUtil = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "qhb123321",
    database: "voa_database"
})