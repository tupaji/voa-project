import { dbUtil } from "../dbUtil.js";

export const store_get = (req,res)=>{
    const q = "SELECT * FROM hzb_store"
    dbUtil.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
}

export const store_post = (req,res)=>{
    const q = "INSERT INTO hzb_store (`name`, `category`, `description`, `menu_item`, `unit_price`) VALUES (?)";
    //const values = ['tname','Food Stall','tdesc','tmenu',1]
    const values = [
        req.body.name,
        req.body.category,
        req.body.description,
        req.body.menu_item,
        req.body.unit_price
    ];

    dbUtil.query(q,[values], (err, data)=>{
        if(err) return res.json(err)
        return res.json("store insert succ")
    });
}

export const store_delete = (req,res)=>{
    const storeItemId = req.params.store_id;
    const q = "DELETE FROM hzb_store WHERE store_id = ?"
    dbUtil.query(q, [storeItemId], (err, data)=>{
        if(err) return res.json(err)
        return res.json("store delete succ")
    })
}

export const store_put = (req,res)=>{
    const storeItemId = req.params.store_id;
    const q = "UPDATE hzb_store SET `name` = ?, `category` = ?, `description` = ?, `menu_item` = ?, unit_price = ? where store_id = ?";

    const values = [
        req.body.name,
        req.body.category,
        req.body.description,
        req.body.menu_item,
        req.body.unit_price
    ]
    dbUtil.query(q, [...values, storeItemId], (err, data)=>{
        if(err) return res.json(err)
        return res.json("store update succ")
    })
}