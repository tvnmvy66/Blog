const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require('mongoose')
const Blog = require('./models/blog')
const User = require('./models/user')
const jwt = require('jsonwebtoken')
const axios = require('axios')
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
    const { token } = req.cookies;
    console.log(token)
    if (!token) return res.status(401).json({ message: `Unauthorized : ${JSON.stringify(req.cookies)}` });
    
    try {
      const { title, desp, content} = req.body;
      const user = jwt.verify(token, process.env.JWT_SECRET);
      const userExits = await User.findOne({ email : user.email})
      console.log(title)
      const newBlog = await Blog.create({createrId : userExits.id ,title, desp, content});
      res.status(201).json(newBlog);
    } catch (error) {
      console.log('some error')
      res.status(500).json({ error: "Failed to create blog" });
    }
  });

// Google OAuth callback endpoint
app.get("/auth/google/callback", async (req, res) => {
    const { code } = req.query;
    if (!code) return res.status(400).send("Code not found");

    try {
        // Exchange code for access token
        const { data } = await axios.post(
            "https://oauth2.googleapis.com/token",
            {
                client_id: process.env.CLIENT_ID,
                client_secret: process.env.CLIENT_SECRET,
                code,
                grant_type: "authorization_code",
                redirect_uri: `${process.env.BURL}/auth/google/callback`,
            },
            { headers: { "Content-Type": "application/json" } }
        );

        // Get user profile
        const { data: user } = await axios.get(
            "https://www.googleapis.com/oauth2/v2/userinfo",
            { headers: { Authorization: `Bearer ${data.access_token}` } }
        );

        const userExits = await User.findOne({ email : user.email})
        if (!userExits) {
            await User.create({
                email: user.email,
                name: user.name,
                picture: user.picture,
                verifiedEmail: true
            });
        } else {
            console.log('User already exists');
        } 
        // Generate JWT token
        const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "1h" });

        // Store token in cookies
        res.cookie("token", token, {
            httpOnly: true,
            secure: true, // Set to true in production
            sameSite: "None",
        });

        res.redirect(`${process.env.FURL}/`);
    } catch (error) {
        console.error("OAuth Error:", error.response?.data || error.message);
        res.status(500).send("Authentication failed");
    }
});

// Get user details from token
app.get("/user",async (req, res) => {
    const { token } = req.cookies;
    if (!token) return res.status(401).json({ message: `Unauthorized : ${JSON.stringify(req.cookies)}` });

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET);
        const userExits = await User.findOne({ email : user.email })
        res.json(userExits);
    } catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
});

app.get("/myblog",async (req, res) => {
    try {
        const { token } = req.cookies;
        if (!token) return res.status(401).json({ message: `Unauthorized : ${JSON.stringify(req.cookies)}` });

        const user = jwt.verify(token, process.env.JWT_SECRET);
        const userExits = await User.findOne({email : user.email})
        const myblog = await Blog.find({ createrId : userExits.id})
        res.json(myblog);
    } catch (error) {
        res.status(401).json({ message: "no id found" });
    }
});

// Sign-out route
app.get('/signout', (req, res) => {
    // Clear the authentication cookie
    res.clearCookie('token', {
        httpOnly: true,
        secure: true, // true in production
        sameSite: 'None' // 'Lax' or 'Strict' if not cross-origin
    });
    
    res.status(200).json({ message: 'Signed out successfully' });
});
// Only start server in local environment
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

