// Create web server
// 1. Load express
const express = require('express');
const app = express();
const port = 3000;

// 2. Load body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// 3. Load mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/comments', { useNewUrlParser: true });

// 4. Load models
const Comment = require('./models/comment');

// 5. Define routes
// GET /comments
app.get('/comments', (req, res) => {
    Comment.find({}, (err, comments) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(comments);
        }
    });
});

// POST /comments
app.post('/comments', (req, res) => {
    const comment = new Comment(req.body);
    comment.save((err, comment) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(comment);
        }
    });
});

// 6. Start server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});