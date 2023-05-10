import mysql from "mysql";

export const dbUtil = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "48508hbt",
    database: "voa_database"
})