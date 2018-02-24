const PORT = process.env.PORT || 5000
const express = require('express');
require('./services/passport');

const authRouter = require('./routes/authRoutes');

const app = express();

app.use('/auth', authRouter);

app.listen(PORT, () => {
    console.log('Server runs on port 5000')
});