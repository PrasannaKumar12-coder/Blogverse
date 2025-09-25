import mongoose from "mongoose";

const addBlogSchema= new mongoose.Schema({
    heading:{type:String,required:true},
    subHeading:{type:String,required:true},
    img:{type:String,required:true},
    keyHighlights:{type:String,required:true},
    category:{type:String,required:true},
    blogContent:{type:String,required:true},
    moreDetails:{type:String,required:true},
    summary:{type:String,required:true},
    conclusion:{type:String,required:true}
})

export default mongoose.model("Blog",addBlogSchema)