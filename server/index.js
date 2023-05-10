import express from "express";
import listRouter from "./routes/lists.js";
import authRouter from "./routes/auth.js";
import attractionRouter from "./routes/attraction.js";
import showRouter from "./routes/show.js";
import storeRouter from "./routes/store.js";

import { dbUtil } from "./dbUtil.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRouter)
// app.use("/api/attraction", attractionRouter)
// app.use("/api/attraction", attractionRouter)
app.use("/api/attraction",attractionRouter)
app.use("/api/show",showRouter)
app.use("/api/store",storeRouter)

app.listen(8080, () => {
    console.log("Server is running on port 8080");
})


app.get("/", (req,res)=>{
    res.json("backend")
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
})