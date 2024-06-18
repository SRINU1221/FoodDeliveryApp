import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String, required:true},
    cartData:{type:Object,default:{}}
},{minimize:false})

//if the model is already created then it will use if the model is not created then it will create the model
const userModel = mongoose.models.user || mongoose.model("user",userSchema);

export default userModel;