const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require('mongoose')
const Blog = require('./models/blog')

require("dotenv").config();

URI = process.env.MONGO_URI;
mongoose.connect(URI)
    .then(()=>console.log('DB Connected!'))
    .catch((err)=> console.error(err));

const app = express();
app.use(cors({ origin:process.env.FURL, credentials: true }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.json({ message: "hello from mate api server" });
});

app.get("/blog",async (req, res) => {
    try {
        const blogData = await Blog.find({})
        res.json(blogData);
    } catch (error) {
        res.status(401).json({ message: "Invalid request" });
    }
});

app.get("/blog/:id",async (req, res) => {
    try {
        const {id} = req.params;
        const blogContent = await Blog.findById(id)
        res.json(blogContent);
    } catch (error) {
        res.status(401).json({ message: "no id found" });
    }
});

app.post("/newpost", async (req, res) => {
    try {
      const { title, desp, content} = req.body;
      console.log(title)
      const newBlog = await Blog.create({ title, desp, content});
      res.status(201).json(newBlog);
    } catch (error) {
      console.log('some error')
      res.status(500).json({ error: "Failed to create blog" });
    }
  });

// Only start server in local environment
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

