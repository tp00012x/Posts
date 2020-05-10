const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config')
const postsRoute = require('./routes/posts')
const cors = require('cors');

app.use(cors())
app.use(express.json());

app.use('/posts', postsRoute)

app.get('/', (req, res) => {
    res.send('We are home')
})

mongoose.connect(
    process.env.DB_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => console.log('connected to DB')
)

app.listen('3000');