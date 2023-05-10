import { dbUtil } from "../dbUtil.js";

export const show_get = (req,res)=>{
    const q = "SELECT * FROM hzb_show"
    dbUtil.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
}

export const show_post = (req,res)=>{
    //const q = "INSERT INTO hzb_show (`name`, `description`, `type`, `s_time`, `e_time`, `wchair_access`, `price`) VALUES (?)"
    const q = "INSERT INTO hzb_show (`name`, `description`, `type`, `s_time`, `e_time`, `wchair_access`, `price`) VALUES (?)";
    //const values = ['test name','test desc','Musical','2023-04-09', '2023-04-09', '1',10];
    const values = [
        req.body.name,
        req.body.description,
        req.body.type,
        req.body.s_time,
        req.body.e_time,
        req.body.wchair_access,
        req.body.price
    ];

    dbUtil.query(q,[values], (err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    });
}

export const show_delete = (req,res)=>{
    const showItemId = req.params.show_id;
    const q = "DELETE FROM hzb_show WHERE show_id = ?"
    dbUtil.query(q, [showItemId], (err, data)=>{
        if(err) return res.json(err)
        return res.json("show delete succ")
    })
}

export const show_put = (req,res)=>{
    const showItemId = req.params.show_id;
    const q = "UPDATE hzb_show SET `name`=?, `description`=?, `type`=?, `s_time`=?, `e_time`=?, `wchair_access`=?, `price`=? where show_id = ?";
    const values = [
        req.body.name,
        req.body.description,
        req.body.type,
        req.body.s_time,
        req.body.e_time,
        req.body.wchair_access,
        req.body.price
    ];
    console.log(values)
    dbUtil.query(q, [...values, showItemId], (err, data)=>{
        if(err) return res.json(err)
        return res.json("show update succ")
    })
}