const mongoose = require('mongoose');
const { Schema } = mongoose;

// define schema
const userSchema = new Schema({
    googleId: String,
});

// creates a collection if it is not already exist
mongoose.model('users', userSchema);