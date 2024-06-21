const mongoose =require("mongoose");


const mentorSchema = mongoose.Schema({
    name: String,
    phone:Number,
    tech:String,
    exp:Number,
})

const Mentor = new mongoose.model("Mentor",mentorSchema);

module.exports = Mentor;