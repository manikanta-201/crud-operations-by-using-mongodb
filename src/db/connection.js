
const mongoose =require("mongoose");


mongoose.connect("mongodb://localhost:27017/Careerpedia")
.then(()=>{
    console.log("connection Establish")
})
.catch((err)=>{
    console.log(`No connestion ERROR : ${err}`);
})