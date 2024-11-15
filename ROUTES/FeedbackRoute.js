import { createAdmin, createAlumni, createStudent,getAllUsers } from "../controllers/userController.js";
import { createCompany, getCompanies } from "../controllers/Company_Controllers.js";
import { createReview } from "../controllers/reviewsController.js";
import { likeReviews } from "../controllers/Likes_Controller.js";


import express from "express";
import { isAdmin } from "../middleware/Middleware.js";

const router=express.Router()


router.post("/admin/create",createAdmin)
router.post("/alumni/create",createAlumni)
router.post("/student/create",createStudent)
router.post("/company/create",isAdmin,createCompany)
router.post("/create/review", createReview)
router.post("/like/add", likeReviews)



router.get("/getCompany",getCompanies)
router.get("/user/get",getAllUsers)

export default router;