import { dbUtil } from "../dbUtil.js";
import bcrypt from "bcryptjs";

export const register = (req, res) => {
    console.log(req.body);
    // check if user exists
    const q = "SELECT * FROM hzb_visitor WHERE email = ?";

    dbUtil.query(q, [req.body.email], (err, result) => {
        if (err) {
            return res.status(500).json(err.sqlMessage);
        }

        if (result.length > 0) {
            return res.status(409).json("User already exists!");
        }

        // encypt password
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);

        // insert user into db
        const q = "INSERT INTO hzb_visitor (fname, lname, gender, street, city, state, zipcode, country, email, password, cell_num, dob, type, visit_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        const values = [
            req.body.fname,
            req.body.lname,
            req.body.gender,
            req.body.street,
            req.body.city,
            req.body.state,
            req.body.zipcode,
            req.body.country,
            req.body.email,
            hashedPassword,
            req.body.cell_num,
            req.body.dob,
            req.body.type,
            req.body.visit_date
        ];

        dbUtil.query(q, values, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).json(err);
            }

            return res.status(200).json({ message: "User created" });
        });
        // generate token
        // send token to client
    })
}

export const login = (req, res) => {
    res.send("register");
}

export const logout = (req, res) => {
    res.send("register");
}