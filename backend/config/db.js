import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect("mongodb+srv://srinuchauhan:6304331256@cluster0.9uipoci.mongodb.net/fooddev").then(()=>console.log("DB connected"));
}