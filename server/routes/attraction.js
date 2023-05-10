import express from "express";
import { 
    attract_get,
    attract_post,
    attract_put,attract_delete  
} from "../controllers/attract.js";

const router = express.Router();

router.get("/attraction", attract_get);
router.post("/attraction", attract_post);
router.put("/attraction/:attract_id", attract_put);
router.delete("/attraction/:attract_id", attract_delete);

export default router;