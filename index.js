const PORT = process.env.PORT || 5000
const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport');
require('./models/Users')

mongoose.connect(keys.mongoURI);

const authRouter = require('./routes/authRoutes');

const app = express();

app.use('/auth', authRouter);

app.listen(PORT, () => {
    console.log('Server runs on port 5000')
});