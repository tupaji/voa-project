import express from "express";
import { 
    show_get,
    show_post,
    show_put,show_delete  
} from "../controllers/show.js";

const router = express.Router();

router.get("/show", show_get);
router.post("/show", show_post);
router.put("/show/:show_id", show_put);
router.delete("/show/:show_id", show_delete);

export default router;