
// Import modules
const express = require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const indexRouter = require('./routes/index');
const methodOverride = require('method-override')
const app = express()
const path = require('path');

// View Engine
app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'ejs');

// Middleware
//static
app.use(express.static(path.join(__dirname, 'public')));
// method-override
app.use(methodOverride('_method'));
// urlencoded
app.use(express.urlencoded({ extended: false }));

// Connect to the MongoDB database
mongoose.connect('mongodb+srv://seki3096:misatoblog@cluster0.bzadxmx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    console.log('MongoDB connected');
}).catch((err) => {
    console.error('MongoDB connection error:', err);
});

// Routing
// Top
app.use('/', indexRouter);
// Articles
app.use('/articles', articleRouter);

// Start the server
app.listen(8000, () => {
    console.log('Server is running')
});
