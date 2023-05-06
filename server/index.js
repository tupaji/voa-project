import express from "express";
import attractionRouter from "./routes/attraction.js";
import authRouter from "./routes/auth.js";
import { dbUtil } from "./dbUtil.js";

const app = express();

app.use(express.json());
app.use("/api/auth", authRouter)
app.use("/api/attraction", attractionRouter)
// app.use("/api/attraction", attractionRouter)

app.listen(8080, () => {
    console.log("Server is running on port 8080");
})




// test
app.get("/zaima", (req, res) => {

    const q = "SELECT * FROM hzb_visitor";

    dbUtil.query(q, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        return res.status(200).json(result);
    });

    // res.send("buzai");
})