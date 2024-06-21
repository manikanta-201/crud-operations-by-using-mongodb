const express = require("express");
require("./db/connection");

const app = express();

const port = process.env.PORT || 5000;

const Mentor = require("./models/mentor");

app.get("/",(req,res)=>{
    res.send("Hell manikanta")
})

app.use(express.json());

// POST Request

app.post("/api/mentors", async (req, res) => {
  try {
    const mentor = new Mentor(req.body);
    const createMentor = await mentor.save();
    res.status(201).send(createMentor);
  } catch (err) {
    res.status(400).send(err);
  }
});
// GET Request

app.get("/api/mentors", async (req, res) => {
  const mentorData = await Mentor.find();
  res.send(mentorData);
});

app.get("/api/mentors/:id", async (req, res) => {
  const id = req.params.id;
  const mentorData = await Mentor.find({ _id: id });
  res.send(mentorData);
});

// PATCH Requst

app.patch("/api/mentors/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = await Mentor.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.send(updateData);
  } catch (err) {
    res.status(400).send(err);
  }
});

// delete data

app.delete("/api/mentors/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deleteData = await Mentor.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.send(deleteData);
  } catch (err) {
    res.send(err);
  }
});

app.listen(port, () => {
  console.log(` sever is running at PORT : ${port}`);

});

