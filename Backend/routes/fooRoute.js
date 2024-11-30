import express from "express";
import { addFood } from "../controllers/foodController";
import multer from "multer";


const foodRouter = express.Router();

// to send data to server
foodRouter.post('/add',addFood)


export default foodRouter