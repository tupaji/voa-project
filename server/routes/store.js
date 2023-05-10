import express from "express";
import { 
    store_get,
    store_post,
    store_put,store_delete  
} from "../controllers/store.js";

const router = express.Router();

router.get("/store", store_get);
router.post("/store", store_post);
router.put("/store/:store_id", store_put);
router.delete("/store/:store_id", store_delete);

export default router;