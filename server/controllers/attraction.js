import { dbUtil } from "../dbUtil.js";

export const attract_get = (req,res)=>{
    const q = "SELECT * FROM hzb_attract"
    dbUtil.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
}

export const attract_post = (req,res)=>{
    const q = "INSERT INTO hzb_attract (`name`, `description`, `type`, `status`, `cpacity`, `min_height`, `duration`, `section`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.description,
        req.body.type,
        req.body.status,
        req.body.cpacity,
        req.body.min_height,
        req.body.duration,
        req.body.section
    ];

    dbUtil.query(q,[values], (err, data)=>{
        if(err) return res.json(err)
        return res.json("attraction insert succ")
    });
}

export const attract_delete = (req,res)=>{
    const attractItemId = req.params.attract_id;
    const q = "DELETE FROM hzb_attract WHERE attract_id = ?"
    dbUtil.query(q, [attractItemId], (err, data)=>{
        if(err) return res.json(err)
        return res.json("attraction delete succ")
    })
}

export const attract_put = (req,res)=>{
    const attractItemId = req.params.attract_id;
    const q = "UPDATE hzb_attract SET `name`=?, `description`=?, `type`=?, `status`=?, `cpacity`=?, `min_height`=?, `duration`=?, `section`=? where attract_id = ?";
    const values = [
        req.body.name,
        req.body.description,
        req.body.type,
        req.body.status,
        req.body.cpacity,
        req.body.min_height,
        req.body.duration,
        req.body.section
    ];
    dbUtil.query(q, [...values, attractItemId], (err, data)=>{
        if(err) return res.json(err)
        return res.json("attract update succ")
    })
}
