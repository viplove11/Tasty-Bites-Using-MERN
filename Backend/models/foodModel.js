import mongoose from "mongoose";


const foodSchema = new mongoose.Schema({
    name: {type:String, required:true},
    description:{type:String, required:true},
    price:{type:Number, required:true},
    image:{type:String, required:true},
    category:{type:String, required:true},
    quantity:{type:Number, default:0}
})


const foodModel =mongoose.model.food || mongoose.Model("food", foodSchema)
export default foodModel