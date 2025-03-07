const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: { type: String},
  desp: { type: String},
  content: { type: String},
  blogpic: { type: String }, // Profile picture URL
}, { timestamps: true });

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
